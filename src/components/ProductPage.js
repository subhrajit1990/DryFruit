import React from 'react';
import {Route,HashRouter,NavLink} from 'react-router-dom';
import Footer from './Footer';

export default class ProductPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
	     	pDetails: {}
	    };
	   
	}
	componentDidMount(){
		 console.log("product page :: "+JSON.stringify(this.props.location));
		// if(Object.keys(this.props.productDetailsParams).length > 0){
		//   this.setState({
		//   	pDetails : this.props.productDetailsParams
		//   });
		// }
	}
	render(){
		
			//const pDetailsPrint = this.state.pDetails;
			return (
				<>
					<div>Coming Soon </div>
					<Footer />
				</>
			);
		
	}
}