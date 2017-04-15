import React from 'react';
import {Provider} from 'react-redux';
import {Router,Route, browserHistory } from 'react-router'

import Signup from './Signup';
import About from './About';
require('../../scss/style.scss');

const App = () => (
  <Provider >
    <Router history={ browserHistory } >
      <Route path="/" component={Signup} />
      <Route path='/about' component={About} />
    </Router>
  </Provider>
);



export default App;
