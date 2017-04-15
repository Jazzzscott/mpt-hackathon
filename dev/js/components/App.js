import React from 'react';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import Signup from './Signup';
import About from './About';
require('../../scss/style.scss');

const history = syncHistoryWithStore(browserHistory, store)

const App = () => (
    <Router history={ browserHistory } >
      <Route path="/" component={Signup} />
      <Route path='/about' component={About} />
    </Router>
);



export default App;
