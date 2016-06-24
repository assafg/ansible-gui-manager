import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Inventory from './Inventory';
import * as InventoryActions from './actions';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(InventoryActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
