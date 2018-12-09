import { all, takeLatest } from 'redux-saga/effects';
import { addGitList } from './gitlist';
import { Types as GitListTypes } from '../ducks/gitlist';

export default function* rootSaga() {
  yield all([takeLatest(GitListTypes.ADD_REQUEST, addGitList)]);
}
