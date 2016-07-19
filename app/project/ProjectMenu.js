import fs from 'fs';
import React, { Component } from 'react';

export default class ProjectMenu extends Component {

  static propTypes = {
    loadProjectFile: React.PropTypes.func,
    projectTree: React.PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  loadFile(file) {
    const { loadProjectFile } = this.props;
    loadProjectFile(file);
  }


  render() {
    const { projectTree } = this.props;

    this.renderTree(projectTree);

    return (
      <div className="ui list">
        <div className="item">
          <i className="folder icon"></i>
          <div className="content">
            <div className="header">Resources</div>
            <div className="description">Ansible files</div>
            <div className="list link">
              {
                Object.files.map((file) =>
                  <a className="item link" key={file} onClick={this.loadFile.bind(this, file)}>
                    <i className="file icon"></i>
                    <div className="content">
                      <div className="header">{file}</div>
                    </div>
                  </a>
                )
              }
            </div>
          </div>
        </div>
      </div>);
  }
}
