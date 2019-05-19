import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import root_reducer from '../reducers/root_reducer';

export const history = createBrowserHistory();
const middleware = [thunk];
const initialState = {};

export const store = createStore(
  root_reducer(history),
  initialState,
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history)),
    applyMiddleware(...middleware)
  )
);
