import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { addFavoriteSuccess, addFavoriteFailed } from '../actions/favorites';

export function* addFavorite({ payload }) {
  try {
    const { data } = yield call(api.get, payload.repository);

    const repositoryData = {
      id: data.id,
      name: data.full_name,
      description: data.description,
      url: data.html_url,
    };

    yield put(addFavoriteSuccess(repositoryData));
  } catch (error) {
    yield put(addFavoriteFailed('Erro ao adicionar repositório'));
  }
}
