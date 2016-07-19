import './Project.less';
import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import ProjectView from './ProjectView';
import ProjectMenu from './ProjectMenu';

export default class Project extends Component {

  static propTypes = {
    inventory: React.PropTypes.object,
    loadProjectFile: React.PropTypes.func
  };

  render() {
    const { inventory, loadProjectFile } = this.props;

    const file = inventory.get('file');

    return (
      <DocumentTitle title="Project">
        <div className="container">
          <div className="ui grid">
            <div className="four wide column">
              <ProjectMenu loadProjectFile={loadProjectFile} />
            </div>
            <div className="twelve wide column">
              <ProjectView file={file} />
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
