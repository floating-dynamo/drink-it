import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import testimonials from "../testimonials";
import "./Carousel.css";

const Carousel = ({ index }) => {
	return (
		<div className="carousel">
			<img
				className="profile-img"
				src={testimonials[index].img}
				alt={testimonials[index].name}
			/>
			<h1 className="profile-title">{testimonials[index].name}</h1>
			<div className="profile-content-cont">
				<FontAwesomeIcon className="content-icon content-icon-left" icon={faQuoteLeft} />
				<p className="profile-content">{testimonials[index].content}</p>
                <FontAwesomeIcon className="content-icon content-icon-right" icon={faQuoteRight} />
			</div>
		</div>
	);
};

export default Carousel;
