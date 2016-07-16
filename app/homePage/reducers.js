import { actions } from './actions';
import Immutable from 'immutable';
import { ipcRenderer } from 'electron';

const InitialState = Immutable.fromJS({
});

export default function homePage(state = InitialState, action) {
  switch (action.type) {
    case actions.SEND_EXAMPLE_MESSAGE:
      ipcRenderer.send('asynchronous-message', action.payload.text);
      return state;
    case actions.EXAMPLE_MESSAGE_RECEIVED:
      return state.set('message', action.payload.text);
    default:
      return state;
  }
}
