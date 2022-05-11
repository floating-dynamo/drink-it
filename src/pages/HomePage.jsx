import React, { useContext, useEffect } from "react";
import AboutMain from "../components/AboutMain";
import Contact from "../components/Contact";
import CopyRight from "../components/CopyRight";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import juice from "../images/juices/juice.png";
import userCartState from "../context/userCartState"

const HomePage = () => {
	let {cart, setCart} = useContext(userCartState);
	useEffect(()=>{
		setCart("Hello")
	},[])
	return (
		<div className="home">
			<Navbar />
			<Main />
			<AboutMain pic={juice} btn={true}/>
			<Testimonials />
			<Contact />
			<CopyRight />
			{console.log(cart)}
		</div>
	);
};

export default HomePage;
