import React, { useContext, useEffect } from "react";
import AboutMain from "../components/AboutMain";
import Contact from "../components/Contact";
import CopyRight from "../components/CopyRight";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import juice from "../images/juices/juice.png";
import UserCartState from "../context/UserCartState"

const HomePage = () => {
	return (
		<div className="home">
			<Navbar />
			<Main />
			<AboutMain pic={juice} btn={true}/>
			<Testimonials />
			<Contact />
			<CopyRight />
		</div>
	);
};

export default HomePage;
