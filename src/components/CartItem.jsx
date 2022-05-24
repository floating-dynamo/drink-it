import { counter } from "@fortawesome/fontawesome-svg-core";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserCartContext from "../context/UserCartContext";
import "./CartItem.css";

const CartItem = () => {
	const { cart, setCart } = useContext(UserCartContext);
	const navigate = useNavigate()
	let totalAmount = 0;
	let quant = 0;
	
	return (
		<div className="cart-items">
			{cart.map((item, index) => {
				totalAmount +=
					parseInt(item.price.split("₹")[1]) * parseInt(item.quant);
					quant += totalAmount / 500
				return (
					<div className="cart-item">
						<img src={item.img} alt={item.name} />
						<div className="cart-item-content">
							<h1>{item.name}</h1>
							<hr />
							<p>
								Price :<span>{item.price}</span>
							</p>
							<p>
								Quantity : <span>{item.quant}</span>
							</p>
						</div>
					</div>
				);
			})}
			<div className="buy-now">
				{totalAmount ? (
					<>
						<h1>Total Sum : ₹ {totalAmount}</h1>
						<p
							className="cart-btn-buy"
							onClick={() => {
								navigate("/pay", { state: { quant: quant } });
							}}
						>
							Buy Now
						</p>
					</>
				) : (
					<h1>Your cart is Empty! Please add an Item</h1>
				)}
			</div>
		</div>
	);
};

export default CartItem;
