export const actions = {
  SEND_EXAMPLE_MESSAGE: 'SEND_EXAMPLE_MESSAGE',
  EXAMPLE_MESSAGE_RECEIVED: 'EXAMPLE_MESSAGE_RECEIVED'
};

export function sendExampleMessage(text) {
  return dispatch => {
    dispatch({
      type: actions.SEND_EXAMPLE_MESSAGE,
      payload: { text }
    });
  };
}

export function receiveExampleMessage(text) {
  return dispatch => {
    dispatch({
      type: actions.EXAMPLE_MESSAGE_RECEIVED,
      payload: { text }
    });
  };
}
