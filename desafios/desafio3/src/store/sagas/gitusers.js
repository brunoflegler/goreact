import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as GitUsersActions } from '../ducks/gitusers';
import { Creators as MainListActions } from '../ducks/main';
import { Creators as ToastActions, Types as ToastTypes } from '../ducks/toast';

export function* addGitUsers({ payload }) {
  try {
    const { data } = yield call(api.get, payload.githubCoord.userGithub);

    if (data.id) {
      const isDuplicated = yield select(state => state.gitusers.data.find(g => g.id === data.id));

      if (isDuplicated) {
        yield put(GitUsersActions.addGitUsersFailure('Este usuário já foi adicionado'));

        yield put(ToastActions.toastify('Este usuário já foi adicionado', ToastTypes.ERROR));
      } else {
        const repositoryData = {
          id: data.id,
          name: data.name || '',
          login: data.login || '',
          url: data.avatar_url || '',
          latitude: payload.githubCoord.latitude,
          longitude: payload.githubCoord.longitude,
        };

        yield put(GitUsersActions.addGitUsersSuccess(repositoryData));
        yield put(MainListActions.closeModal());

        yield put(ToastActions.toastify('Usuário adicionado com sucesso!', ToastTypes.SUCCESS));
      }
    } else {
      yield put(GitUsersActions.addGitUsersFailure('Erro ao adicionar um usuário'));

      yield put(ToastActions.toastify('Erro ao adicionar um usuário', ToastTypes.ERROR));
    }
  } catch (error) {
    yield put(GitUsersActions.addGitUsersFailure('Erro ao adicionar um usuário'));

    yield put(ToastActions.toastify('Erro ao adicionar um usuário', ToastTypes.ERROR));
  }
}

export function* removeGitUsers({ payload }) {
  try {
    const data = yield select(state => state.gitusers.data.filter(g => g.id !== payload.id));

    yield put(GitUsersActions.removeGitUsersSuccess(data));

    yield put(ToastActions.toastify('Usuário removido com sucesso!', ToastTypes.SUCCESS));
  } catch {
    yield put(ToastActions.toastify('Erro ao remover um usuário', ToastTypes.ERROR));
  }
}
