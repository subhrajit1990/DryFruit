import React from 'react';
import Footer from './Footer';
import {NotFoundPage, NoDataFoundPage}  from './NotFoundPage';



export default class Cart extends React.Component {
	constructor(props){
		super(props);
		this.state={
			productList: [],
			loading: true
		}
		this.el = document.querySelector(".loader");
	}

	componentDidMount(){
		if(this.el.style.display === "none"){
     		this.el.style.display = "block";
     	}
     	this.setState({
			loading : false
		});
	}

	render(){
		if (this.el) {
	        this.el.style.display = "none";  // hiding the spinner element
	    }
		var productListSection;
	    if((this.state.productList).length == 0 ){
	    	productListSection = <NoDataFoundPage />;
	      	return ( productListSection );

	    }else{
	    	return(
	    		<tr class="table-body-row">
					<td class="product-remove"><a href="#"><i class="far fa-window-close"></i></a></td>
					<td class="product-image"><img src="assets/img/products/product-img-1.jpg" alt="" /></td>
					<td class="product-name">Strawberry</td>
					<td class="product-price">$85</td>
					<td class="product-quantity"><input type="number" placeholder="0" /></td>
					<td class="product-total">1</td>
				</tr>
	    	)
	    }
		
		return(
			<>
				<div id="dryfruit-contactus" className="breadcrumb-section breadcrumb-bg">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 offset-lg-2 text-center">
								<div className="breadcrumb-text">
									<p>Fresh and Organic</p>
									<h1>Cart</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="cart-section mt-150 mb-150">
					<div class="container">
						<div class="row">
							<div class="col-lg-8 col-md-12">
								<div class="cart-table-wrap">
									<table class="cart-table">
										<thead class="cart-table-head">
											<tr class="table-head-row">
												<th class="product-remove"></th>
												<th class="product-image">Product Image</th>
												<th class="product-name">Name</th>
												<th class="product-price">Price</th>
												<th class="product-quantity">Quantity</th>
												<th class="product-total">Total</th>
											</tr>
										</thead>
										<tbody>
										{productListSection}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer/>
			</>
		)
	}
} 