import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Contact.css";

const Contact = () => {
	return (
		<div className="contact">
			<h1>Contact Us</h1>
			<div className="contact-flex">
				<div className="contact-form">
					<input type="text" placeholder="Full Name" />
					<input type="email" placeholder="Email" />
					<input type="text" placeholder="Phone Number" />
					<input type="text" placeholder="Message" />
                    <div className="contact-submit">
                        <button>SEND</button>
                    </div>
				</div>
				<div className="contact-info">
					<div className="contact-loc">
                        <FontAwesomeIcon className="contact-icon" icon={faLocationDot} />
                        <p>Porvorim, Goa</p>
                        <FontAwesomeIcon className="contact-icon" icon={faPhone}/>
                        <p>+91 8329628916</p>
                        <FontAwesomeIcon className="contact-icon" icon={faEnvelope}/>
                        <p>shridharmaskeri@gmail.com</p>
                    </div>
                    <div className="contact-social">
                        <h2>Follow Us</h2>
                        <FontAwesomeIcon className="contact-social-icon" icon={faFacebookF}/>
                        <FontAwesomeIcon className="contact-social-icon" icon={faTwitter}/>
                        <FontAwesomeIcon className="contact-social-icon" icon={faLinkedinIn}/>
                        <FontAwesomeIcon className="contact-social-icon" icon={faInstagram}/>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
