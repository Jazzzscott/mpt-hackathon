
import React from 'react';
import { Router, Route } from 'react-router'
import About from './About'
import Signup from './Signup'

require('../../scss/style.scss');

const App = () => (
	<div>
		 <Route exact path="/" component={Signup}/>
		 <Route exact path="/about" component={About}/>
	</div>
);

export default App;
