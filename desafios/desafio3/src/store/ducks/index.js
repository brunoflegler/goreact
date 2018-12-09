import { combineReducers } from 'redux';

import gitlist from './gitlist';
import main from './main';

export default combineReducers({
  gitlist,
  main,
});
