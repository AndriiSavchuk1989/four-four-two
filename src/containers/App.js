import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// components
import HomeComponent from '../components/Home/Home.component';
import ProductsListComponent from '../components/ProductsList/ProductsList.component';
import LayoutComponent from '../components/Layout/Layout.component';
import AboutProduct from '../components/ProductCart/AboutProduct.component';
import HeaderComponent from '../components/Header/Header.component';
import BasketComponent from '../components/Basket/Basket.component';
import RegistrationFormComponent from '../components/RegistrationForm/RegistrationForm.component';

const history = createBrowserHistory();

const App = () => {
  return (
    <BrowserRouter history={history}>
      <HeaderComponent />
      <Route component={LayoutComponent}>
        <Route exact path="/" component={HomeComponent} />
        <Route exact path="/products" component={ProductsListComponent} />
        <Route exact path="/registration" component={RegistrationFormComponent} />
      </Route>
      <Route exact path="/products/:id" component={AboutProduct} />
      <Route exact path="/basket" component={BasketComponent} />
    </BrowserRouter>
  );
};

export default hot(module)(App);
