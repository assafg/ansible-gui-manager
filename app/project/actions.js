export const actions = {
  LOAD_INVENTORY_FILE: 'LOAD_INVENTORY_FILE'
};

export function loadProjectFile(file) {
  return dispatch => {
    dispatch({
      type: actions.LOAD_INVENTORY_FILE,
      payload: { file }
    });
  };
}
