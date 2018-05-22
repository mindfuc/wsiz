import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			'loaded': false
		}
	}

	componentDidMount(){

	}

	render(){

		return (
			<div className="main-content">
				dziaa
			</div>
		)
	}
}

export default Home;
