import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import bottleList from "../bottleList";
import "./BottleJuice.css";
import { useNavigate } from "react-router-dom";

const BottleJuice = () => {
	const navigate = useNavigate();

	function handleWishList() {}

	function handleBottleJuiceDetail(bottle) {
		let bottleName = bottle.name.split(" ").join("-").toLowerCase();
		navigate(`bottle-juice/${bottleName}`, { state: { bottle: bottle } });
	}

	return (
		<div className="bottle-juice">
			<h1>Juice In a Bottle</h1>
			<div className="juice-bottles">
				{bottleList.map((bottle) => {
					return (
						<div className="juice-bottle" onClick={()=>{handleBottleJuiceDetail(bottle)}}>
							<FontAwesomeIcon
								onClick={handleWishList}
								className="juice-bottle-wish"
								icon={faHeart}
							/>
							<img src={bottle.img} alt={bottle.name} />
							<h4>{bottle.name}</h4>
							<p>{bottle.price}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default BottleJuice;
