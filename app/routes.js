import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './homePage/container';
import InventoryPage from './inventory/container';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/inventory" component={InventoryPage} />
  </Route>
);
