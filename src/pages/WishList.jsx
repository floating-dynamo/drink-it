import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import WishListItem from "../components/WishListItem";
import Navbar from "../components/Navbar";
import userWishContext from "../context/UserWishContext";
const WishList = () => {
	// const location = useLocation();
	const { wish, setWish } = useContext(userWishContext);
	return (
		<div className="wishlist">
			<Navbar />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					marginTop: "50px",
				}}
			>
				<h1 className="wish-title">Your WishList</h1>
				{wish.length ? (
					<WishListItem />
				) : (
					<div className="buy-now">
						<h1>Your Wish List is Empty!</h1>
					</div>
				)}
			</div>
		</div>
	);
};

export default WishList;
