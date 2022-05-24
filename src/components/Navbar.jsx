import React from "react";
import "./Navbar.css";
import logo from "../images/logo/default-monochrome.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBasketShopping,
	faSearch,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			<div>
				<img className="navbar-brand" src={logo} alt="DrintItLogo" />
			</div>
			<div className="navbar-items">
				<Link className="navbar-link" to="/">
					HOME
				</Link>
				<Link className="navbar-link" to="/about-us">
					ABOUT
				</Link>
				<Link className="navbar-link" to="/catalogue">
					CATALOGUE
				</Link>
				<Link className="navbar-link" to="/contact-us">
					CONTACT
				</Link>
				<div className="search-bar">
					<input type="text" placeholder="Search" />
					<FontAwesomeIcon
						icon={faSearch}
						color="#440e62"
						className="search-icon"
					/>
				</div>
				<div className="icons">
					<Link className="icon-link" to="/cart">
						<FontAwesomeIcon className="icon" icon={faBasketShopping} />
					</Link>
					<Link className="icon-link" to="/wishlist">
						<FontAwesomeIcon className="icon" icon={faHeart} />
					</Link>
					<Link className="icon-link" to="#">
						<FontAwesomeIcon className="icon" icon={faUser} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
