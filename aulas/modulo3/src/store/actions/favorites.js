export const addFavoriteRequest = repository => ({
  type: 'ADD_FAVORITE_REQUEST',
  payload: {
    repository,
  },
});

export const addFavoriteSuccess = data => ({
  type: 'ADD_FAVORITE_SUCCESS',
  payload: {
    data,
  },
});

export const addFavoriteFailed = error => ({
  type: 'ADD_FAVORITE_FAILED',
  payload: {
    error,
  },
});
