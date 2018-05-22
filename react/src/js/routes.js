import React, { Component } from 'react';

import Home from './containers/home/';

import { setCurrentUser } from './actions/users';
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
					<Switch>
						<Route path={'/'} component={Home} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default Routes;

