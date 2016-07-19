import fs from 'fs';
import React, { Component } from 'react';

const workDir =  './data'

export default class ProjectMenu extends Component {

  static propTypes = {
    loadProjectFile: React.PropTypes.func
  };

  constructor(props) {
    super(props);
    const files = fs.readdirSync(workDir);
    this.state = {
      files
    };
  }

  loadFile(file) {
    const { loadProjectFile } = this.props;
    loadProjectFile(file);
  }

  render() {
    const { files } = this.state;
    if (files.length === 0) {
      return (
        <a>
          <i className="">New</i>
        </a>
      );
    }
    return (
      <div className="ui list">
        <div className="item">
          <i className="folder icon"></i>
          <div className="content">
            <div className="header">Resources</div>
            <div className="description">Ansible files</div>
            <div className="list link">
              {
                files.map((file) =>
                  <a className="item link" key={file} onClick={this.loadFile.bind(this, `${workDir}/${file}`)}>
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
