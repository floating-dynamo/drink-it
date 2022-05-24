import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserCartContext from "../context/UserCartContext";
import UserWishContext from "../context/UserWishContext";

import "./WishListItem.css";

const WishListItem = () => {
	// const location = useLocation();
	const { wish, setWish } = useContext(UserWishContext);
	const { cart, setCart } = useContext(UserCartContext);
	const navigate = useNavigate();

	function addToCart(bottle) {
		let selectedItem = cart.filter((item) => {
			return item.name === bottle.name;
		});
		console.log(selectedItem);
		console.log(selectedItem.length);

		if (!selectedItem.length) {
			setCart((prev) => {
				return [...prev, bottle];
			});
			let remainingItems = cart.filter((item) => {
				return item.id !== selectedItem.id;
			});
            console.log(remainingItems)
			setWish(remainingItems);
			bottle.quant += 1;
			navigate("/cart");
		} else {
			alert("Item already added to cart");
		}
	}

	return (
		<div className="wish-item">
			{wish.map((item) => {
				return (
					<div className="cart-item">
						<img src={item.img} alt={item.name} />
						<div className="cart-item-content">
							<h1>{item.name}</h1>
							<hr />
							<p>
								Price :<span>{item.price}</span>
							</p>
							<p
								className="wish-add-cart"
								onClick={() => {
									addToCart(item);
								}}
							>
								Add To Cart
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default WishListItem;
