import React from 'react';
import Home from './Home';
import {Route,HashRouter,NavLink,BrowserRouter} from 'react-router-dom';
import Main from './Main';

export default class Header extends React.Component{
	render(){
		return (
			<header>  
				<div id="sticker-sticky-wrapper" className="sticky-wrapper" style={{height: "85px"}}>
					<div className="top-header-area" id="sticker">
						<div className="container">
							<div className="row">
								<div className="col-lg-12 col-sm-12 text-center">
									<div className="main-menu-wrap">
										<div className="site-logo">
											<a href="/">
												<img style={{width:"156px",height:"26px"}}src="" alt="" />
											</a>
										</div>
									<BrowserRouter>
										<nav className="main-menu" style={{display: "block"}}>
											<ul className="sub-menu">
	                            				<li><NavLink to="/">Home</NavLink></li>
	                            				<li><NavLink to="/Contact">Contact</NavLink></li>
	                            				<li><NavLink to="/About">About Us</NavLink></li>
	                            				<li>
													<div className="header-icons">
														<NavLink  to="/Cart"><i className="fas fa-shopping-cart"></i></NavLink>
														<a className="mobile-hide search-bar-icon" href="#"><i className="fas fa-search"></i></a>
													</div>
												</li>
	                       					</ul>
										</nav>
										<Main/>
									</BrowserRouter>
									<a className="mobile-show search-bar-icon" href="#"><i className="fas fa-search"></i></a>
									<div className="mobile-menu"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		);
	}
}