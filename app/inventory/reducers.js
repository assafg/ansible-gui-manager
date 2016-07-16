import { actions } from './actions';
import Immutable from 'immutable';

const InitialState = Immutable.fromJS({
  inventory: {}
});

export default function inventory(state = InitialState, action) {
  switch (action.type) {
    case actions.LOAD_INVENTORY_FILE: {
      const newState = state.set('file', action.payload.file);
      return newState;
    }
    default:
      return state;
  }
}
