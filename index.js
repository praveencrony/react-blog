import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route,IndexRoute,IndexLink,Link,browserHistory, hashHistory } from 'react-router';

import App from './components/App.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';

ReactDOM.render(
		<Router history = {hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute page="Home" component={Home} />
				<Route path="/about" page="About" component={About}/>
				<Route path="/contact" page="Contact" component={Contact}/>
			</Route>
		</Router>,
		document.getElementById('app')
		);