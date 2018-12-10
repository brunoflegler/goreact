import { all, takeLatest } from 'redux-saga/effects';
import { addGitUsers, removeGitUsers } from './gitusers';
import { Types as GitUsersTypes } from '../ducks/gitusers';

export default function* rootSaga() {
  yield all([takeLatest(GitUsersTypes.ADD_REQUEST, addGitUsers)]);

  yield all([takeLatest(GitUsersTypes.REMOVE_REQUEST, removeGitUsers)]);
}
