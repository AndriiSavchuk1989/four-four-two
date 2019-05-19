import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './containers/App';

// store
// import { store } from './store/store';
import root_reducer from './reducers/root_reducer';
import routerMiddleware from 'react-router-redux/src/middleware';

const initialState = {};

const store = createStore(
  root_reducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware(history))
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
