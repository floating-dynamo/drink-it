import React from "react";
import bottleList from "../bottleList";

const BottleJuice = () => {
	return (
		<div>
			<h1>Juice In a Bottle</h1>
			<div>
				{bottleList.map((bottle) => {
					return (
						<div>
							<img
								src={`../images/bottles/bottle_${bottle.id}`}
								alt={bottle.name}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default BottleJuice;
