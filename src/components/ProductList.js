import React from 'react';
import {Route,HashRouter,NavLink,Link,BrowserRouter as Router,useNavigate} from 'react-router-dom';
import {APIServerCallWithoutAsync} from './CommonUtils';
import {NotFoundPage, NoDataFoundPage}  from './NotFoundPage';
import Footer from './Footer';
import ProductPageInterceptor from './ProductPageInterceptor';
import {Breadcrumb} from './Breadcrumb';

export default class ProductList extends React.Component{
	constructor(props){
		super(props);
		this.productsListResponse = this.productsListResponse.bind(this);
		this.state={
			productList: [],
			loading: true
		}
		this.el = document.querySelector(".loader");
	}
	componentDidMount(){
		// Needs to call the original service
     	if(this.el.style.display === "none"){
     		this.el.style.display = "block";
     	}
     	let payLoad = {"productRequest":{
     					"categoryId":""
					}
				}
		const extraParameters = {			
		    body: JSON.stringify(payLoad)
	  	};
     	
		try{
			console.log("Loading productList");
			APIServerCallWithoutAsync('','POST','/product/api/all',extraParameters)
			.then(response => response.json())
	    	.then(this.productsListResponse); 
    	}catch (e){
    		console.log("Error occurred :: "+e);
    	}finally {
    		
    	}
	}

	productsListResponse(response){
		console.log("data ::"+JSON.stringify(response));
		this.setState({
			productList : response.ProductResponse.productDetails || [],
			loading : false
		});
	}

	render(){
		var productListSection;
	    if((this.state.productList).length == 0 ){
	    	productListSection = <NoDataFoundPage />;
	      	return ( productListSection );

	    }else{
	       productListSection = (this.state.productList).map((products, i) => {

		        let productDetails = {
		            "PName": products["title"],
		            "PImage": products["image"],
		            "PBuyBtn": products["BUY"],
		            "PPrice": products["price"],
		            "PCategory": products["category"],
		            "pDes": products["description"]
		        };
		        return(	        	
						<div className="col-lg-4 col-md-6 text-center strawberry" style={{position: "relative", display: "inline-block", float: "left",padding: "10px"}} key={i}>
							<div className="single-product-item">
								<div className="product-image">
									<a href="/">
										<img src={products["image"]} alt="pListImg" />
									</a>
								</div>
								<h3>{products["title"]}</h3>
								<p className="product-price"><span>Per Kg</span> {products["price"]} </p>
								<Link key={i} to= "/ProductPageInterceptor" state= {{"productdetailsparams":productDetails} } >Read More ...</Link>	
							</div>
						</div>					
	        	);
      		});
			if (this.el) {
	        	this.el.style.display = "none";  // hiding the spinner element
	      	}
    	}
	 return (
	 	<>
		 	<Breadcrumb/>
		    <div className="product-section mt-150 mb-150">
				<div className="container">
					<div className="row product-lists" style={{position: "relative", height: "auto"}}>
				 	{productListSection}
				 	</div>
		        </div>
		    </div> 
		    <Footer />
	      </>
	    );
 	}
}
