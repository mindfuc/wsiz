import React, { Component } from 'react';
import firebase from './src/firebase.js';

import Aside from './components/aside/aside';
import Header from './components/header/header';
import Home from './containers/home/';
import ProductDetails from './containers/productDetails';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

class Routes extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<Header/>
					<Aside/>
					<Switch>
						<Route path={'/product/:id'} component={ ProductDetails } />
						<Route path={'/'} component={Home} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default Routes;
