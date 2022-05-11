import React from "react";
import bottleList from "../bottleList";
import BottleJuice from "../components/BottleJuice";
import GlassJuice from "../components/GlassJuice";
import Navbar from "../components/Navbar";

const CataloguePage = () => {
	return (
		<div>
			<Navbar />
			<div>
				<BottleJuice />
                <GlassJuice />
			</div>
		</div>
	);
};

export default CataloguePage;
