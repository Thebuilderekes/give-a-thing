import { Link } from "react-router-dom";

import "./header.css";
import { useState } from "react";
import Logo from "./Logo";
import Hamburger from "./HamburgerIcon";

const Navbar = () => {
	const [showNavbar, setShowNavbar] = useState(false);

	const handleShowNavbar = () => {
		setShowNavbar(!showNavbar);
	};

	return (
		<div>
			<nav className="navbar">
				<div className="container">
					<div className="logo">
						<Logo />
					</div>
					<div className="menu-icon" onClick={handleShowNavbar}>
						<Hamburger />
					</div>
					<div className={`nav-elements  ${showNavbar && "active"}`}>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/blogs">Blogs</Link>
							</li>
							<li>
								<Link to="/projects">Projects</Link>
							</li>
							<li>
								<Link to="/About">About</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
