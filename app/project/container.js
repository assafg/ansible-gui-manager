import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Project from './Project';
import * as ProjectActions from './actions';

function mapStateToProps(state) {
  return {
    project: state.get('project')
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProjectActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
