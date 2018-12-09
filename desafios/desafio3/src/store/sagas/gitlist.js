import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as GitListActions } from '../ducks/gitlist';
import { Creators as MainListActions } from '../ducks/main';

export function* addGitList({ payload }) {
  try {
    const { data } = yield call(api.get, payload.githubCoord.userGithub);

    const repositoryData = {
      id: data.id,
      name: data.name,
      login: data.login,
      url: data.avatar_url,
      latitude: payload.githubCoord.latitude,
      longitude: payload.githubCoord.longitude,
    };

    yield put(GitListActions.addGitListSuccess(repositoryData));
    yield put(MainListActions.closeModal());
  } catch (error) {}
}
