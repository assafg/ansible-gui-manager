import { combineReducers } from 'redux-immutable';
import routing from './route';
import project from '../project/reducers';
import homePage from '../homePage/reducers';

const rootReducer = combineReducers({
  homePage,
  project,
  routing
});

export default rootReducer;
