import React, { useState } from "react";
import "./Testimonials.css";
import testimonials from "../testimonials";
import Carousel from "./Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
	const [currIndex, setCurrIndex] = useState(0);
	return (
		<div className="testimonials">
			<h1 className="test-title">Testimonials</h1>
			<p className="test-sub-title">
				This is what our valuable customers think about us
			</p>
			<Carousel index={currIndex} />
			<FontAwesomeIcon
				className="test-icon left"
				icon={faAngleLeft}
				onClick={() => {
					if (currIndex === 0) setCurrIndex(testimonials.length - 1);
					else setCurrIndex(currIndex - 1);
				}}
			/>
			<FontAwesomeIcon
				className="test-icon right"
				icon={faAngleRight}
				onClick={() => {
					setCurrIndex((currIndex + 1) % testimonials.length);
				}}
			/>
			<div className="test-numbers">
				{testimonials.map((testimonial) => {
					return (
						<div
							className="circle"
							style={{
								backgroundColor: testimonial.id === currIndex + 1 && "#f9b244",
							}}
							onClick={() => {
								setCurrIndex(testimonial.id - 1);
							}}
						></div>
					);
				})}
			</div>
		</div>
	);
};

export default Testimonials;
