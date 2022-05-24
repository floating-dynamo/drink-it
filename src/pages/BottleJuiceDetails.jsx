import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BottleJuiceContent from "../components/BottleJuiceContent";
import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";
import "./BottleJuiceDetails.css";
import UserCartContext from "../context/UserCartContext";
import CopyRight from "../components/CopyRight";
import userWishContext from "../context/UserWishContext";

const BottleJuiceDetails = () => {
	const [counter, setCounter] = useState(0);
	const location = useLocation();
	let bottle = location.state.bottle;
	const navigate = useNavigate();
	const { cart, setCart } = useContext(UserCartContext);
	const { wish, setWish } = useContext(userWishContext);

	function addToCart() {
		if (counter) {
			let selectedItem = cart.filter((item) => {
				return item.name === bottle.name;
			});
			console.log(selectedItem);
			console.log(selectedItem.length);

			if (!selectedItem.length) {
				setCart((prev) => {
					return [...prev, bottle];
				});
			} else {
				selectedItem[0].quant += counter;
			}
			bottle.quant += counter;
			navigate("/cart");
		} else {
			alert("Please select the quantity!");
		}
	}

	function addToWishList() {
		let selectedItem = wish.filter((item) => {
			return item.name === bottle.name;
		});

		if (!selectedItem.length) {
			setWish((prev) => {
				return [...prev, bottle];
			});
			navigate("/wishlist", { state: { bottle: bottle } });
		} else {
			alert("This item already exists in your WishList!");
		}
	}

	return (
		<div className="bottle-juice-details">
			<Navbar />
			<div className="bt-juice-details">
				<div className="bottle-img">
					<img src={bottle.img} alt={bottle.name} />
					<div className="bottle-counter">
						<p
							onClick={() => {
								setCounter((prev) => {
									if (prev !== 0) {
										return (prev -= 1);
									} else {
										return 0;
									}
								});
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
					<p
						className="bottle-btn-buy-now"
						onClick={() => {
							if (counter) {
								navigate("/pay", { state: { quant: counter } });
							} else {
								alert("Please Select the quantity");
							}
						}}
					>
						Buy Now
					</p>
				</div>
				<div className="bt-content">
					<h1>{bottle.name.toUpperCase()}™</h1>
					<div className="line" />
					<div className="review-stars">
						<h4>★★★★☆</h4>
						<a
							href="#reviews"
							onClick={(e) => {
								e.preventDefault();
							}}
						>
							2 Reviews
						</a>
					</div>
					<BottleJuiceContent />
					<div className="bottle-btns">
						<p className="bottle-btn" onClick={addToCart}>
							Add to Cart
						</p>
						<p className="bottle-btn" onClick={addToWishList}>
							Add to WishList
						</p>
					</div>
				</div>
			</div>
			<div id="reviews">
				<Reviews />
			</div>
			<CopyRight />
		</div>
	);
};

export default BottleJuiceDetails;
