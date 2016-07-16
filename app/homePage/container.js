import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from './Home';
import * as HomeActions from './actions';

function mapStateToProps(state) {
  return {
    message: state.getIn(['homePage', 'message'])
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HomeActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
