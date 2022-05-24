import React, { useState } from "react";
import UserCartContext from "./UserCartContext";

function UserCartState(props) {
	const [cart, setCart] = useState([]);
	return (
		<UserCartContext.Provider value={{ cart, setCart }}>
			{props.children}
		</UserCartContext.Provider>
	);
}

export default UserCartState;
