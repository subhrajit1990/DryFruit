import React from 'react';
import Footer from './Footer';
import { Route, HashRouter, NavLink, BrowserRouter } from 'react-router-dom';
import viewRecentlyStorage from './localStorage';
import {APIServerCallWithoutAsync} from './CommonUtils';


export default class Home extends React.Component {
	constructor(params){
		super();
		this.state = {
			recentViews: [],
			recentProductList:[]
		};
		this.recentProductsListResponse = this.recentProductsListResponse.bind(this);

	}

	componentDidMount(){

		const recentViewData = JSON.parse(localStorage.getItem("viewRecentlyProducts") || "[]");
		this.setState({
        	recentViews : recentViewData
     	 });
     	
		try{
			APIServerCallWithoutAsync('','GET','/product/api/recentProducts')
			.then(response => response.json())
	    	.then(this.recentProductsListResponse); 
    	}catch (e){
    		console.log("Error occurred :: "+e);
    	}finally {
    		console.log("finally executing");
    	}

	}

	recentProductsListResponse(response){
		console.log("recent products ::"+JSON.stringify(response));
		this.setState({
			recentProductList : response.ProductResponse.productDetails || [],
		});
	}

	viewRecentHeader(){
		if((this.state.recentViews).length > 0){
			return (<div className="section-title">	<h3><span className="orange-text">Recently</span> Viewed</h3></div>);
		}
	};

    render() {

    	var viewRecentDataPaintWithData = "";
		if((this.state.recentViews).length > 0){
			var viewRecentDataPaint = (this.state.recentViews);
			if(viewRecentDataPaint.length > 0){
				viewRecentDataPaintWithData = viewRecentDataPaint.map((viewProducts,i) => {
					return(	
						<div className="col-sm-2 col-md-3 text-center" key={i}>
							<div className="thumbnail">
								<img src={viewProducts["PImage"]} alt="pListImg" width="40" height="30"/>
								<p>{viewProducts["PName"]}</p>
								<p>{viewProducts["PPrice"]}</p>
							</div>
						</div>
					);
				});
			}
		}

		var recentlyAddedProducts="";
		if((this.state.recentProductList).length > 0){
			var viewRecentAddedProductsDataPaint = (this.state.recentProductList);
			if(viewRecentAddedProductsDataPaint.length > 0){
				recentlyAddedProducts = viewRecentAddedProductsDataPaint.map((viewRecentProducts,i) => {
					return(	
						<div className="col-lg-4 col-md-6 text-center" key={i}>
							<div className="single-product-item">
								<div className="offers"></div>
								<div className="product-image">
									<a href=""><img src={viewRecentProducts["image"]} alt="pListImg" width="40" height="30"/></a>
								</div>
								<h3>{viewRecentProducts["title"]}</h3>
								<p className="product-price"><span>Per Kg</span> {viewRecentProducts["price"]}</p>
								<a  className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
							</div>
						</div>
					);
				});
			}
		}

        return (
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
					{recentlyAddedProducts}
				</div>
			</div>
		</div>
		<div className="container-fluid text-center">
			{this.viewRecentHeader()}
			<div className="row">
				{viewRecentDataPaintWithData}	
			</div>
		</div>
		<Footer />
	</>
		);
	}
}