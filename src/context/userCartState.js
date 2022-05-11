import React, { useState } from "react";
import userCartContext from "./userCartContext";

const userCartState = (props) => {
	const [cart, setCart] = useState(" ");
	return (
		<userCartContext.Provider value={{ cart, setCart }}>
			{props.children}
		</userCartContext.Provider>
	);
};

export default userCartState;
