import React from "react";
import bottleList from "../bottleList";
import BottleJuice from "../components/BottleJuice";
import Navbar from "../components/Navbar";

const CataloguePage = () => {
	return (
		<div>
			<Navbar />
			<div>
				<BottleJuice />
			</div>
		</div>
	);
};

export default CataloguePage;
