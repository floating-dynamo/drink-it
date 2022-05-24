import React, { useState } from "react";
import UserWishContext from "./UserWishContext";

const UserWishState = (props) => {
	const [wish, setWish] = useState([]);
	return (
		<UserWishContext.Provider value={{ wish, setWish }}>
			{props.children}
		</UserWishContext.Provider>
	);
};

export default UserWishState;
