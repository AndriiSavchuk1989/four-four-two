import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// components
import HomeComponent from '../components/Home/Home.component';
import ProductsListComponent from '../components/ProductsList/ProductsList.component'
import LayoutComponent from '../components/Layout/Layout.component';
import ProductCartComponent from '../components/ProductCart/ProductCart.component';
import HeaderComponent from '../components/Header/Header.component';

const history = createBrowserHistory();

const App = () => (
  <BrowserRouter history={history}>
    <HeaderComponent />
    <Route component={LayoutComponent}>
      <Route exact path="/" component={HomeComponent} />
      <Route exact path="/products" component={ProductsListComponent} />
      <Route exact path="/products/:id" component={ProductCartComponent} />
    </Route>
  </BrowserRouter>
);

export default hot(module)(App);
