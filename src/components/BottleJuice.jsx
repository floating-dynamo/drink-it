import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import bottleList from "../bottleList";
import "./BottleJuice.css";
import { useNavigate } from "react-router-dom";
import userWishContext from "../context/UserWishContext";

const BottleJuice = () => {
	const navigate = useNavigate();
	const { wish, setWish } = useContext(userWishContext);

	function handleWishList(bottle) {
		let selectedItem = wish.filter((item) => {
			return item.name === bottle.name;
		});

		if (!selectedItem.length) {
			setWish((prev) => {
				return [...prev, bottle];
			});
			navigate("/wishlist", { state: { bottle: bottle } });
		} else {
			alert("This item already exists in your WishList!")
		}
	}

	function handleBottleJuiceDetail(bottle) {
		let bottleName = bottle.name.split(" ").join("-").toLowerCase();
		navigate(`bottle-juice/${bottleName}`, { state: { bottle: bottle } });
	}

	return (
		<div className="bottle-juice">
			<h1>Our Juices</h1>
			<div className="juice-bottles">
				{bottleList.map((bottle) => {
					return (
						<div className="entire-juice-bottle">
							<FontAwesomeIcon
								onClick={() => {
									handleWishList(bottle);
								}}
								className="juice-bottle-wish"
								icon={faHeart}
							/>
							<div
								key={bottle.id}
								className="juice-bottle"
								onClick={() => {
									handleBottleJuiceDetail(bottle);
								}}
							>
								<img src={bottle.img} alt={bottle.name} />
								<h4>{bottle.name}</h4>
								<p>{bottle.price}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default BottleJuice;
