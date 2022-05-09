import React from "react";
import { Link } from "react-router-dom";
import error from "../images/error/void.svg";

import "./ErrorPage.css";

const ErrorPage = () => {
	return (
		<div className="error">
			<div className="error-content">
				<h1>Oops!</h1>
				<p>Sorry, the page you are looking for does not exist.</p>
			</div>
			<img src={error} alt="Error" className="error-img"/>
            <Link className="error-link" to="/">Go Back to Home</Link>
		</div>
	);
};

export default ErrorPage;
