import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as FavoriteActions } from '../ducks/favorites';

export function* addFavorite({ payload }) {
  try {
    const { data } = yield call(api.get, payload.repository);

    const isDuplicated = yield select(state => state.favorites.data.find(f => f.id === data.id));

    if (isDuplicated) {
      yield put(FavoriteActions.addFavoriteFailed('Repositório Duplicado'));
    } else {
      const repositoryData = {
        id: data.id,
        name: data.full_name,
        description: data.description,
        url: data.html_url,
      };

      yield put(FavoriteActions.addFavoriteSuccess(repositoryData));
    }
  } catch (error) {
    yield put(FavoriteActions.addFavoriteFailed('Erro ao adicionar repositório'));
  }
}
