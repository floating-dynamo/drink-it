import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./PaymentPage.css";

const PaymentPage = () => {
	const [checked, setChecked] = useState(false);
	const location = useLocation();
	const quant = location.state.quant;

	return (
		<div className="payment-page">
			<form className="pay-form">
				<h1>Payment Details</h1>
				<h4 className="total-amt">
					Total Amount : <span>{" ₹ " + quant * 500}</span>
				</h4>
				<h4>Add a new card</h4>
				<div className="pay-form-input">
					<input type="text" placeholder="0000-0000-0000-0000" maxLength={19} />
					<FontAwesomeIcon icon={faCreditCard} className="credit-icon" />
				</div>
				<div className="pay-details">
					<div>
						<h4>Expiry date</h4>
						<input type="date" />
					</div>
					<div>
						<h4>CVC/CVV</h4>
						<input type="text" placeholder="0-0-0" />
					</div>
				</div>
				<div className="card-name">
					<h4>Cardholder's name</h4>
					<input type="text" placeholder="Enter Cardholder's Full Name" />
				</div>
				<div className="save-card-check">
					<span
						onClick={() => {
							setChecked(!checked);
						}}
						style={checked ? { border: " 5px solid #f9b244" } : null}
					></span>
					<p>Save Card</p>
				</div>
				<button className="add-card-btn">Add Card</button>
			</form>
		</div>
	);
};

export default PaymentPage;
