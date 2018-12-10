import { combineReducers } from 'redux';

import gitusers from './gitusers';
import main from './main';

export default combineReducers({
  gitusers,
  main,
});
