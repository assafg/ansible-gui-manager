const fs = require('fs');

import React, { Component } from 'react';

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
    return (<div>
      <ul>
      {
        files.map((file) => {
          return (
            <li className="ui list" key={file} onClick={this.loadFile.bind(this, file)}>
              <div className="item">{file}</div>
            </li>
          );
        })
      }
      </ul>
    </div>);
  }
}

