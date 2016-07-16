import './Home.less';
import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2>Home</h2>
          <Link to="/inventory"><span className="ui button">Inventory</span></Link>
        </div>
      </div>
    );
  }
}
