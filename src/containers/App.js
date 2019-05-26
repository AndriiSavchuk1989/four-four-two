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
import BasketComponent from '../components/Basket/Basket.component';

const history = createBrowserHistory();

const App = (props) => {
  console.log(props.store.getState());
  return (
    <BrowserRouter history={history}>
      <HeaderComponent/>
      <Route component={LayoutComponent}>
        <Route exact path="/" component={HomeComponent}/>
        <Route exact path="/products" component={ProductsListComponent}/>
      </Route>
      <Route exact path="/products/:id" component={ProductCartComponent}/>
      <Route exact path="/basket" component={BasketComponent}/>
    </BrowserRouter>
    )
};

export default hot(module)(App);
