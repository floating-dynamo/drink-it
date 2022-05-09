import React from "react";
import { Link } from "react-router-dom";
import "./AboutMain.css";


const AboutMain = ({pic, btn}) => {
	return (
		<div className="about-main">
			<img src={pic} alt="" />
            <div className="content">
                <h1>About Us</h1>
                <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum t is a long established fact that a reader will be distracted by the readable content of a page when looking at</p>
            </div>
            {btn && <div className="about-link">
                <Link to="/about-us" className="link">Read More</Link>
            </div>}
		</div>
	);
};

export default AboutMain;
