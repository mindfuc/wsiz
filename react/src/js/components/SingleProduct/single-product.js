import React from 'react';
import { Link } from 'react-router-dom';

function SingleProduct(props) {
	let singleProduct = props.details;
  return (
    <div className="single-product">
			<img src={singleProduct.imageUrl}/>
			<div className="content">
				<h5>{singleProduct.title}</h5>
				<p>{singleProduct.description}</p>
				<Link to={`/product/${singleProduct.id}`} className="btn">Read more...</Link>
			</div>
		</div>
  );
}

export default SingleProduct;
