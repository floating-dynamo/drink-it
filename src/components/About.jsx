import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import testimonials from "../testimonials";
import Sridhar from "../images/cofounders/shri-cof.png";
import Shubham from "../images/cofounders/shubham-cof.png";
import "./About.css";

const About = () => {
	return (
		<div className="about-comp">
			<h1>Our Team</h1>
			<div className="disp-cof">
				{testimonials.map((cofounder) => {
					return cofounder.id === 1 || cofounder.id === 2 ? (
						<div className="about-cof">
							<img src={cofounder.id == 1 ? Shubham : Sridhar} alt={cofounder.name} />
							<h1>{cofounder.name}</h1>
							<hr />
							<p>Co-Founder</p>
						</div>
					) : null;
				})}
			</div>
		</div>
	);
};

export default About;
