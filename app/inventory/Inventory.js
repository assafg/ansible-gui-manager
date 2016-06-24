import React, { Component } from 'react';
import styles from './Inventory.css';


export default class Inventory extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>inventory</h2>
          <p>
            New Inventory
          </p>
        </div>
      </div>
    );
  }
}
