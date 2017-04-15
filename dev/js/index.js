import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import App from './components/App'

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

const history = createBrowserHistory()

ReactDOM.render(
    <Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App} />
		</Router>
    </Provider>,
    document.getElementById('root')
);
