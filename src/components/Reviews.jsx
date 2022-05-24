import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Reviews.css";

const Reviews = () => {
	return (
		<div className="reviews">
			<h2>Reviews</h2>
			<div className="review">
				<div>
					<div>
						<FontAwesomeIcon className="icon" icon={faUser} />
						<h4>Sridhar Maskeri</h4>
					</div>
					<div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Praesentium dolorem et provident minus esse temporibus vel vero
							blanditiis? Quasi dolore amet sed a maxime? Incidunt debitis nobis
							eos error eligendi.
						</p>
					</div>
				</div>
        <div>
					<div>
						<FontAwesomeIcon className="icon" icon={faUser} />
						<h4>Shubham Mayenkar</h4>
					</div>
					<div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Praesentium dolorem et provident minus esse temporibus vel vero
							blanditiis? Quasi dolore amet sed a maxime? Incidunt debitis nobis
							eos error eligendi.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reviews;
