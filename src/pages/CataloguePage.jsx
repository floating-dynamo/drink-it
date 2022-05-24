import React from "react";
import bottleList from "../bottleList";
import BottleJuice from "../components/BottleJuice";
import CopyRight from "../components/CopyRight";
import GlassJuice from "../components/GlassJuice";
import Navbar from "../components/Navbar";

const CataloguePage = () => {
	return (
		<div>
			<Navbar />
			<div>
				<BottleJuice />
				<CopyRight />
                {/* <GlassJuice /> */}
			</div>
		</div>
	);
};

export default CataloguePage;
