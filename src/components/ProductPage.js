import React from 'react';
import {Route,HashRouter,NavLink,useLocation} from 'react-router-dom';
import Footer from './Footer';
import {Breadcrumb} from './Breadcrumb';
import viewRecentlyStorage from './localStorage';
import DropDown from './dropDown';

export default class ProductPage extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	      pDetails: {}
	    };
	    this.viewRecently(this.props.dataprops.productdetailsparams)
  	} 
	componentDidMount(){
		console.log("product page :: "+JSON.stringify(this.props.dataprops.productdetailsparams));
		if(Object.keys(this.props.dataprops.productdetailsparams).length > 0){
		  this.setState({
		  	pDetails : this.props.dataprops.productdetailsparams
		  });
		}
	}
	viewRecently(res){
		viewRecentlyStorage("viewRecentlyProducts",res,"PName");
	};
	render(){
		const pDetailsPrint = this.state.pDetails;
		const priceAndType = return (<DropDown productData={pDetailsPrint["PPrice"]}/>);
		return (
			<>
				<Breadcrumb/>
				<div className="single-product mt-150 mb-150">
					<div className="container">
						<div className="row">
							<div className="col-md-5">
								<div className="single-product-img">
									<img src={pDetailsPrint.PImage} alt="pDetailsImg" />
								</div>
							</div>
							<div className="col-md-7">
								<div className="single-product-content">
									<h3>{pDetailsPrint.PName}</h3>
									<p>{pDetailsPrint.pDes}</p>
									<div className="single-product-form">
										<form >
											<input type="number" placeholder="0"/>
										</form>
										{priceAndType}
										<a href="/" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
										<p><strong>Categories: </strong>{pDetailsPrint.PCategory}</p>
									</div>
									<h4>Share:</h4>
									<ul className="product-share">
										<li><a href=""><i className="fab fa-facebook-f"></i></a></li>
										<li><a href=""><i className="fab fa-twitter"></i></a></li>
										<li><a href=""><i className="fab fa-google-plus-g"></i></a></li>
										<li><a href=""><i className="fab fa-linkedin"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</>
		);
	}
}