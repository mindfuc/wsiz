import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setFilter } from '@/actions/filters';
import SingleProduct from '@/components/SingleProduct/single-product';
import firebase from '../../src/firebase.js';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			'data': {}
		}
	}

	componentDidMount() {
		this.db = firebase.database().ref('products').on('value', (snap) => {
			this.setState({
				data: snap.val()
			});
		});
	}

	filterProducts() {
		let filter = this.props.filter;
		let filteredProducts;
		if(typeof filter == "undefined" || filter == 'all') {
			return this.state.data;
		} else {
			filteredProducts = this.state.data.filter(function(singleProduct) {
			  return singleProduct.category == filter;
			});
			return filteredProducts;
		}
	}

	renderProducts() {
		let products = this.filterProducts();
		const allProducts = Object.keys(products).map(key =>
			<div className="col-lg-3 col-md-4 col-sm-6" key={key}>
				<SingleProduct details={products[key]} />
	    </div>
		);
		return allProducts;
	}

	render(){
		if(_.isEmpty(this.state.data)) {
			return (
				<nav className="main-content loading">
				</nav>
			)
		} else {
			return (
				<div className="main-content row">
					{this.renderProducts()}
				</div>
			)
		}
	}
}

function mapStateToProps(state){
	return {
		filter: state.filter.filter
	};
}

export default withRouter(connect(mapStateToProps, { setFilter })(Home));

