import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";
import UserCartContext from "../context/UserCartContext";

const Cart = () => {
	const { cart, setCart } = useContext(UserCartContext);

	return (
		<div className="cart">
            <Navbar />
			<h1 className="cart-title">Your Cart</h1>
			{cart !== undefined && <CartItem />}
		</div>
	);
};

export default Cart;
