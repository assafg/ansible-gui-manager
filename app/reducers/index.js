import { combineReducers } from 'redux-immutable';
import routing from './route';
import inventory from '../inventory/reducers';
import homePage from '../homePage/reducers';

const rootReducer = combineReducers({
  homePage,
  inventory,
  routing
});

export default rootReducer;
