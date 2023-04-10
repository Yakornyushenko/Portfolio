import './styles/main.css';
import React from "react";
import * as ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {createBrowserHistory} from "history";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {ConnectedRouter, routerMiddleware} from "connected-react-router";
import {Provider} from "react-redux";

import createRootReducer from './reducers';
import routes from "./routes";

const history = createBrowserHistory();
const middlewares = [thunk,routerMiddleware(history)];
const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middlewares))
);

ReactDOM.render(
<Provider store={store}>
<ConnectedRouter history={history}>
    {routes}
</ConnectedRouter>
</Provider>,
document.getElementById('root')
)