import React, { useState } from "react";
import userWishContext from "./userWishContext";

const userWishState = (props) => {
	const [wish, setWish] = useState(" ");
	return (
		<userWishContext.Provider value={{ wish, setWish }}>
			{props.children}
		</userWishContext.Provider>
	);
};

export default userWishState;
