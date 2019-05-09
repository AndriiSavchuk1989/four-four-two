import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HomeComponent from '../components/Home/Home.component';

const history = createBrowserHistory();

const App = () => (
  <BrowserRouter history={history}>
    <HomeComponent/>
  </BrowserRouter>
);

export default hot(module)(App);
