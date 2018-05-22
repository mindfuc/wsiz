import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { setCurrentUser } from './actions/users';


// STORE
import { store } from './store';

// ROUTES
import Routes from './routes';

// Styles
import 'bootstrap';
import '../styles/index.scss';

ReactDOM.render(
	<Provider store={store}>
		<div>
			<Routes />
		</div>
	</Provider>
, document.getElementById('app'));
