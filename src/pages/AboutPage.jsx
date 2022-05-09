import React from "react";
import AboutMain from "../components/AboutMain";
import Navbar from "../components/Navbar";
import juices from "../images/juices/juices.png"
import About from "../components/About"

const AboutPage = () => {
	return (
		<div style={{boxSizing: "border-box", overflow:"hidden"}}>
			<Navbar />
			<AboutMain pic = {juices} btn={false}/>
			<About />
		</div>
	);
};

export default AboutPage;
