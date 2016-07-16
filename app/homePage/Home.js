import './Home.less';
import React, { Component } from 'react';
import { Link } from 'react-router';
import autoBind from 'react-autobind';
import { ipcRenderer } from 'electron';

export default class Home extends Component {

  static propTypes = {
    sendExampleMessage: React.PropTypes.func,
    receiveExampleMessage: React.PropTypes.func,
    message: React.PropTypes.string
  };

  constructor(props) {
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    const { receiveExampleMessage } = this.props;
    ipcRenderer.on('asynchronous-reply', (event, arg) => {
      receiveExampleMessage(arg);
    });
  }
  handleClick(txt) {
    const { sendExampleMessage } = this.props;
    console.log('click!');
    sendExampleMessage(`${txt}: ${new Date()}`);
  }

  render() {
    return (
      <div>
        <div className="container">
          <h2>Home</h2>
          <Link to="/inventory"><span className="ui button">Inventory</span></Link>
          <div
            className="ui button blue"
            onClick={this.handleClick.bind(this, 'My Message')}
          >
          Test Messaging
          </div>
          <span>{this.props.message}</span>
        </div>
      </div>
    );
  }
}
