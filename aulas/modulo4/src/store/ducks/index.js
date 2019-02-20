import { combineReducers } from 'redux';
import playlist from './playlists';
import playlistDetails from './playlistDetails';
import error from './error';
import player from './player';

export default combineReducers({
  playlist,
  playlistDetails,
  error,
  player,
});
