import React from 'react';
import {Route,HashRouter,NavLink,BrowserRouter} from 'react-router-dom';

export default class Footer extends React.Component{
	render(){
		return(
			<footer>
				<div className="footer-area">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-6">
								<div className="footer-box about-widget">
									<h2 className="widget-title">About us</h2>
									<p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="footer-box get-in-touch">
									<h2 className="widget-title">Get in Touch</h2>
									<ul>
										<li>Bengaluru</li>
										<li>subhrajitsahu1990@gmail.com</li>
										<li>+91 740*******</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="footer-box pages">
									<h2 className="widget-title">Pages</h2>
									<HashRouter>
										<nav>
											<ul className="sub-menu">
	                            				<li><NavLink to="/">Food</NavLink></li>
	                            				<li><NavLink to="/Home">Home</NavLink></li>
	                            				<li><NavLink to="/About">About Us</NavLink></li>
	                            				<li><NavLink to="/Contact">Contact</NavLink></li>
	                       					</ul>
										</nav>
									</HashRouter>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="footer-box subscribe">
									<h2 className="widget-title">Subscribe</h2>
									<p>Subscribe to our mailing list to get the latest updates.</p>
									<form action="index.html">
										<input type="email" placeholder="Email" />
										<button type="submit"><i className="fas fa-paper-plane"></i></button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="copyright">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-12">
								<p>Copyrights © 2022 - <a href="">Subhrajit Sahu</a>,  All Rights Reserved.<br/>
								Distributed By - <a href="">Subhrajit</a>
								</p>
							</div>
							<div className="col-lg-6 text-right col-md-12">
								<div className="social-icons">
									<ul>
										<li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
										<li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
										<li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
										<li><a href="#" target="_blank"><i className="fab fa-linkedin"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}