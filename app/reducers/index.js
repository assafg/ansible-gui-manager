import { combineReducers } from 'redux-immutable';
import routing from './route';
import inventory from '../inventory/reducers';

const rootReducer = combineReducers({
  inventory,
  routing
});

export default rootReducer;
