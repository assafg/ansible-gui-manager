import './Project.less';
import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import ProjectView from './ProjectView';
import ProjectMenu from './ProjectMenu';
import fs from 'fs';
import path from 'path';

export default class Project extends Component {

  static propTypes = {
    project: React.PropTypes.object,
    loadProjectFile: React.PropTypes.func
  };

  constructor(props) {
    super(props);
    const tree = {};
    this.loadProjectDir('.', 'data', tree);
    this.state = {
      projectTree: tree
    };
  }

  loadProjectDir(p, dirName, tree) {
    const files = fs.readdirSync(path.join(p, dirName));
    files.forEach((file) => {
      if (fs.statSync(path.join(p, dirName, file)).isDirectory()) {
        tree[file] = {};
        this.loadProjectDir(path.join(p, dirName), file, tree[file]);
      } else {
        tree[file] = path.join(p, dirName, file);
      }
    });
  }

  render() {
    const { project, loadProjectFile } = this.props;
    const { projectTree } = this.state;
    const file = project.get('file');

    return (
      <DocumentTitle title="Project">
        <div className="container">
          <div className="ui grid">
            <div className="four wide column">
              <ProjectMenu projectTree={projectTree} loadProjectFile={loadProjectFile} />
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
