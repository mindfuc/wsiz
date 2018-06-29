import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setFilter } from '@/actions/filters';
import _ from 'lodash';
import firebase from '../../src/firebase.js';

class Aside extends Component {
	constructor(props) {
		super(props);

		this.state = {
			'data': {}
		};
	}

	componentDidMount() {
		this.db = firebase.database().ref('categories');
    this.db.on('value', (snap) => {
      this.setState({ data: snap.val() });
    });
	}

	filterResults(category) {
		if(this.props.filter !== category) {
			this.props.setFilter(category);
		}
	}

	renderCategories(){
		const navCategories = Object.keys(this.state.data).map(key =>
	  	<Link to="/" key={key}
	  		onClick={() => this.filterResults(this.state.data[key].id)}>{this.state.data[key].title}
	  	</Link>
		);
		const allCategories = [navCategories,
			<Link to="/" key={'all'}
	  		onClick={() => this.filterResults("all")}>
	  			All
	  	</Link>
		]
		return allCategories;
	}

	render(){
		if(_.isEmpty(this.state.data)) {
			return (
				<nav className="main-nav w3-sidenav loading">
				</nav>
			)
		} else {
			return (
				<nav className="main-nav w3-sidenav">
				  {this.renderCategories()}
				</nav>
			)
		}
	}
}

function mapStateToProps(state){
	return {
		filter: state.filter.filter
	};
}

export default connect(mapStateToProps, { setFilter })(Aside);
