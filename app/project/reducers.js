import { actions } from './actions';
import Immutable from 'immutable';
import fs from 'fs'
import ini from 'ini'
import path from 'path'

const InitialState = Immutable.fromJS({
  project: {}
});

export default function project(state = InitialState, action) {
  switch (action.type) {
    case actions.LOAD_INVENTORY_FILE: {
      const fileName = action.payload.file
      let newState = state.set('fileName', fileName)
      const doc = ini.parse(fs.readFileSync(fileName, 'utf8'))
      return newState.set('doc', doc)
    }
    default:
      return state;
  }
}
