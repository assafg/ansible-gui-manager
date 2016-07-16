const fs = require('fs');

import React, {Component} from 'react';

export default class InventoryMenu extends Component {

  static propTypes = {
    loadInventoryFile: React.PropTypes.func
  };

  constructor(props) {
    super(props);

    const files = fs.readdirSync('./data');
    this.state = {
      files
    };
  }

  loadFile(file) {
    const { loadInventoryFile } = this.props;
    loadInventoryFile(file);
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
                files.map((file) => {
                  return (
                    <a className="item link" key={file} onClick={this.loadFile.bind(this, file)}>
                      <i className="file icon"></i>
                      <div className="content">
                        <div className="header">{file}</div>
                      </div>
                    </a>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>);
  }
}

