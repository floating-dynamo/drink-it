import React from "react";
import "./Main.css";
import juices from "../images/juices/juices.png"

const Main = () => {
	return (
		<div className="hero">
			<div className="main">
				<h1 className="title-1">Welcome to</h1>
				<h1 className="title-2">Our Juice Center</h1>
				<div className="sub-title">
					<p>We sell beverages</p>
					<p>that quench your thirst!</p>
				</div>
				<button className="btn">Read More</button>
                <div className="fruits">
                    <img src={juices} alt="Juice" />
                </div>
			</div>
		</div>
	);
};

export default Main;
