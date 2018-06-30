import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from '../../src/firebase.js';

class ProductDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			'data': {}
		};
	}

	componentDidMount() {
		console.time('Wczytywanie pojedynczego produktu');
		let productID = this.props.match.params.id;
		this.product = firebase.database()
			.ref('products')
			.orderByChild('id')
			.equalTo(productID)
			.on('value', (snap) => {
			let results = snap.val();
			if(typeof results == 'object') {
				results = Object.keys(results).map(function(key) {
				  return [Number(key), results[key]];
				});
			}
			results = results.filter(n => true);
			this.setState({
				data: results
			});
		});
		console.timeEnd("Wczytywanie pojedynczego produktu");
	}

	render(){
		if(_.isEmpty(this.state.data)) {
			return (
				<div className="main-content loading">
				</div>
			)
		} else {
		let productDetails = this.state.data[0][1]
		return (
			<div className="main-content row">
				<div className="col-md-6">
					<div className="single-product">
						<div className="text-center">
							<img src={productDetails.imageUrl}/>
						</div>
						<div className="content">
		    			<h5>{productDetails.title}</h5>
		    			<div>
		    				<strong>Category: </strong>
		    				<span>{productDetails.category}</span>
		    			</div>
		    			<div>
		    				<strong>Price: </strong>
		    				<span>${productDetails.price}</span>
		    			</div>
		    			<br/>
		    			<p>{productDetails.description}</p>
		    		</div>
					</div>
		    </div>
			</div>
			)
		}
	}
}

export default ProductDetails;

