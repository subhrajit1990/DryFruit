import React from 'react';
import { Route, HashRouter, NavLink, BrowserRouter as Router } from 'react-router-dom';


function NotFound(props){
	return (
			<>
			<div className="search-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<span className="close-btn"><i className="fas fa-window-close"></i></span>
							<div className="search-bar">
								<div className="search-bar-tablecell">
									<h3>Search For:</h3>
									<input type="text" placeholder="Keywords"/>
									<button type="submit">Search <i className="fas fa-search"></i></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="breadcrumb-section breadcrumb-bg">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 offset-lg-2 text-center">
							<div className="breadcrumb-text">
								<p>{props.labelData}</p>
								<h1>{props.headerData}</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export class NotFoundPage extends React.Component {
  render() {
    return (
    	<NotFound labelData="Fresh and Organic" headerData="Page not found" />
    );
  }
}

export class NoDataFoundPage extends React.Component {
  render() {
    return (
     	<>
			<NotFound labelData="Fresh and Organic" headerData="No data found !" />
			<div className="full-height-section error-section">
				<div className="full-height-tablecell">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 offset-lg-2 text-center">
								<div className="error-text">
									<i className="far fa-sad-cry"></i>
									<h1>Oops! Not data Found.</h1>
									<p>Your cart is empty, please go back and add some ...</p>
									<nav>
										<NavLink  className="boxed-btn" to="/">Back to Home</NavLink>
									</nav>								
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
    );
  }
}