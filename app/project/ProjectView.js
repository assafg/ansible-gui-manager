import './Project.less';
import React, { Component } from 'react';
import ServerName from './ServerName';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import fs from 'fs';
import path from 'path';
import ini from 'ini';

class ProjectView extends Component {
  static propTypes = {
    file: React.PropTypes.string
  };

  static defaultProps = {
    invFile: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      fileName: props.file
    };
  }

  componentWillReceiveProps(props) {
    const { file } = props;
    this.setState({ fileName: file });
    if (file) {
      const doc = ini.parse(fs.readFileSync(path.join('data', file), 'utf8'));
      this.setState({ doc });
    }
  }

  render() {
    const { fileName, doc } = this.state;
    let tree = [];
    if (doc) {
      tree = Object.keys(doc).map((node, i) =>
        <ul key={i}>
          <div>[{node}]</div>
          <div>
          {
            Object.keys(doc[node]).map((n, j) => (<ServerName key={`${i}-${j}`} text={n} />))
          }
          </div>
        </ul>);
    }
    return (
      <div className="highlight">
        <pre>
          <code className="invFileView language-apacheconf">
            <h3>{fileName}</h3>
            {tree}
          </code>
        </pre>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(ProjectView);
