import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import inventory from '../inventory/reducers';

const rootReducer = combineReducers({
  inventory,
  routing
});

export default rootReducer;
