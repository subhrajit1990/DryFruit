import React from 'react';
import {APIServerCall} from './CommonUtils';
import CommonValidationEngine from './CommonValidationEngine';

export default class Contact extends React.Component {
	constructor(props){
		super(props);
		this.contactSubmission = this.contactSubmission.bind(this);
	}
	contactSubmission(e){
		let name = document.getElementById("name").value,
			email=document.getElementById("email").value,
			phoneNumber = document.getElementById("phone").value,
			subject = document.getElementById("subject").value,
			message = document.getElementById("message").value;

		let form = document.getElementById("dryfruit-contact").getElementsByTagName("input"),
		form_validator_check = {
            name: {
               	verify: ["nullCheck"],
                message: ["Please enter the name"]
            },
            email: {
                verify: ["email"],
                message: ["Please enter the email"]
            },
            phone: {
                verify: ["number"],
                message: ["Please enter the phone number"]
            },
            message: {
               	verify: ["nullCheck"],
                message: ["Please enter the message"]
            },
        };
		let validationOps = new CommonValidationEngine(form,form_validator_check);
        if(validationOps.commonValidationFields()){
        	const postData = {"contactMeRequest":{
				"name": name,
				"email": email,
				"phoneNumber":phoneNumber,
				"message": message,
				"subject": subject
			}};
			let finalRes = APIServerCall(postData,'POST','/Misc/api/contactMe');
			console.log("Final results :: "+JSON.stringify(finalRes))
        }else{
        	alert("Error");
        }
		e.preventDefault();
	}

    render() {
        return (
            <React.Fragment>
				<div id="dryfruit-contactus" className="breadcrumb-section breadcrumb-bg">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 offset-lg-2 text-center">
								<div className="breadcrumb-text">
									<p>Get 24/7 Support</p>
									<h1>Contact us</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="contact-from-section mt-150 mb-150">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 mb-5 mb-lg-0">
								<div className="form-title">
									<h2>Have you any question?</h2>
									<p>Lorem ipsum  Lorem ipsum Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum !</p>
								</div>
							 	<div id="form_status"></div>
								<div className="contact-form">
									<form  id="dryfruit-contact" >
										<p>
											<input type="text" placeholder="Name" name="name" id="name" />
											<input type="email" placeholder="Email" name="email" id="email" />
										</p>
										<p>
											<input type="tel" placeholder="Phone" name="phone" id="phone" />
											<input type="text" placeholder="Subject" name="subject" id="subject" />
										</p>
										<p><textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea></p>
										<p><button className="submit" type="submit" onClick={this.contactSubmission} >Submit</button></p>
									</form>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="contact-form-wrap">
									<div className="contact-form-box">
										<h4><i className="fas fa-map"></i> Shop Address</h4>
										<p> 22, Bengaluru <br/> Karnataka. <br/> Country Name</p>
									</div>
									<div className="contact-form-box">
										<h4><i className="far fa-clock"></i> Shop Hours</h4>
										<p>MON - FRIDAY: 8 to 9 PM <br/> SAT - SUN: 10 to 8 PM </p>
									</div>
									<div className="contact-form-box">
										<h4><i className="fas fa-address-book"></i> Contact</h4>
										<p>Phone: +91  740******* <br/> Email: support@***.com</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="footer-area">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-6">
								<div className="footer-box about-widget">
									<h2 className="widget-title">About us</h2>
									<p> Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  </p>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="footer-box get-in-touch">
									<h2 className="widget-title">Get in Touch</h2>
									<ul>
										<li>34/8, East Hukupara, Gifirtok, Sadan.</li>
										<li>support@xxx.com</li>
										<li>+91 740*******</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="footer-box subscribe">
									<h2 className="widget-title">Subscribe</h2>
									<p>Subscribe to our mailing list to get the latest updates.</p>
									<form action="/">
										<input type="email" placeholder="Email" />
										<button type="submit"><i className="fas fa-paper-plane"></i></button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}