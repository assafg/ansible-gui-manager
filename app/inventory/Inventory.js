import './Inventory.less';
import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import InventoryView from './InventoryView';
import InventoryMenu from './InventoryMenu';

export default class Inventory extends Component {

  static propTypes = {
    inventory: React.PropTypes.object,
    loadInventoryFile: React.PropTypes.func
  };

  render() {
    const { inventory, loadInventoryFile } = this.props;

    const file = inventory.get('file');

    return (
      <DocumentTitle title="Inventory">
        <div className="container">
          <div className="ui grid">
            <div className="four wide column">
              <InventoryMenu loadInventoryFile={loadInventoryFile} />
            </div>
            <div className="twelve wide column">
              <InventoryView file={file} />
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
