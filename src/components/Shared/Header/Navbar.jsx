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
		<div className="mx-[2rem] mt-[2rem]">
			<nav className="navbar bg-slate-200 pt-2">
				<div className="container">
					<div className="logo">
						<Logo />
					</div>
					<button className="menu-icon" onClick={handleShowNavbar}>
						<Hamburger />
					</button>
					<div className={`nav-elements  ${showNavbar && "active"}`}>
						<ul>
							<li className="border border-slate-500 rounded-xl ">
								<Link to="/">Home</Link>
							</li>
							<li className="border border-slate-500 rounded-xl ">
								<Link to="/About">About</Link>
							</li>
							<li className="border border-slate-500 rounded-xl ">
								<Link to="/projects">Projects</Link>
							</li>
							<li className="border border-slate-500 rounded-xl ">
								<Link to="/blogs">Blogs</Link>
							</li>
							<li className="border border-slate-500 rounded-xl ">
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
