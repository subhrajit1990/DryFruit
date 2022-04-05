import React from 'react';
import Footer from './Footer';
import {Route,HashRouter,NavLink,BrowserRouter} from 'react-router-dom';

export default class Home extends React.Component{
	render(){
		return(
			<>
			<div className="hero-area hero-bg">
				<div className="container">
					<div className="row">
						<div className="col-lg-9 offset-lg-2 text-center">
							<div className="hero-text">
								<div className="hero-text-tablecell" style={{padding: "10% 0 10% 0"}}>
									<p className="subtitle">Fresh &amp; Healthy</p>
									<h1>Delicious Seasonal Dry Fruits</h1>
									<div className="hero-btns">
										
											<nav>
												<NavLink  className="boxed-btn" to="/ProductList">Dry Fruits Collection</NavLink>
												<NavLink  className="bordered-btn" to="/Contact">Contact Us</NavLink>
											</nav>
										
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="product-section mt-150 mb-150">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 offset-lg-2 text-center">
							<div className="section-title">	
								<h3><span className="orange-text">Our</span> Products</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
							</div>
						</div>
					</div>

			<div className="row">
				<div className="col-lg-4 col-md-6 text-center">
					<div className="single-product-item">
						<div className="product-image">
							<a href="single-product.html"><img src="" alt=""/></a>
						</div>
						<h3>Almond</h3>
						<p className="product-price"><span>Per Kg</span> 85</p>
						<a  className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 text-center">
					<div className="single-product-item">
						<div className="product-image">
							<a href="single-product.html"><img src="" alt=""/></a>
						</div>
						<h3>Apricot</h3>
						<p className="product-price"><span>Per Kg</span> 70 </p>
						<a  className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
					<div className="single-product-item">
						<div className="product-image">
							<a href="single-product.html"><img src="" alt=""/></a>
						</div>
						<h3>Dates</h3>
						<p className="product-price"><span>Per Kg</span> 35 </p>
						<a  className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
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