import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// components
import HomeComponent from '../components/Home/Home.component';
import ProductsListComponent from '../components/ProductsList/ProductsList.component'
import LayoutComponent from '../components/Layout/Layout.component';
import ProductComponent from '../components/Product/Product.component';

const history = createBrowserHistory();

const App = () => (
  <BrowserRouter history={history}>
    <Route component={LayoutComponent}>
      <Route exact path="/" component={HomeComponent} />
      <Route exact path="/products" component={ProductsListComponent} />
      <Route exact path="/products/:id" component={ProductComponent} />
    </Route>
  </BrowserRouter>
);

export default hot(module)(App);
