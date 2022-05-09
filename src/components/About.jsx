import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import facts from "../facts";

import "./About.css";

const About = () => {
	return (
		<div className="about-comp">
			<div className="about-comp-facts-title">
				<h1>Live Better!</h1>
				<p>Accelerate your journey to better nutrition and a healthier life.</p>
			</div>
			<div className="facts">
				{facts.map((fact) => {
					return (
						<div className="fact">
							<FontAwesomeIcon className="fact-icon" icon={fact.img} />
							<h1>{fact.title}</h1>
							<p>{fact.content}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default About;
