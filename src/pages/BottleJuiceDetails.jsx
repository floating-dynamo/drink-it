import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import BottleJuiceContent from "../components/BottleJuiceContent";
import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";
import "./BottleJuiceDetails.css";

const BottleJuiceDetails = () => {
	const [counter, setCounter] = useState(0);
	const location = useLocation();
	let bottle = location.state.bottle;

	return (
		<div className="bottle-juice-details">
			<Navbar />
			<div className="bt-juice-details">
				<div className="bottle-img">
					<img src={bottle.img} alt={bottle.name} />
					<div className="bottle-counter">
						<p
							onClick={() => {
								setCounter(counter - 1);
							}}
							className="operator"
						>
							-
						</p>
						<h4>{counter}</h4>
						<p
							onClick={() => {
								setCounter(counter + 1);
							}}
							className="operator"
						>
							+
						</p>
					</div>
					<p className="bottle-btn-buy-now">Buy Now</p>
				</div>
				<div className="bt-content">
					<h1>{bottle.name.toUpperCase()}™</h1>
					<div className="line" />
					<div className="review-stars">
						<h4>★★★★☆</h4>
						<p>12 Reviews</p>
					</div>
					<BottleJuiceContent />
					<div className="bottle-btns">
						<p className="bottle-btn">Add to Cart</p>
						<p className="bottle-btn">Add to WishList</p>
					</div>
				</div>
			</div>
			<Reviews />
		</div>
	);
};

export default BottleJuiceDetails;
