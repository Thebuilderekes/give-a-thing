import { Link, useLocation } from 'react-router-dom';
import './header.css';
import { useState, useEffect } from 'react';
import Logo from './Logo';
import Hamburger from './HamburgerIcon';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const targetElement = document.getElementById(hash.slice(1)); // Remove leading #
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <div className="mx-[1rem] lg:mx-[2rem] mt-[2rem]">
      <nav className="navbar  bg-slate-300 pt-2">
        <div className="container">
          <div className="logo">
            <Logo />
          </div>
          <button className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </button>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li className="border md:border-1 md:border-slate-600 rounded-xl ">
                <Link to="/">Home</Link>
              </li>
              <li className=" border md:border-1 md:border-slate-600 inline-block overflow-hidden rounded-xl ">
                <Link to="/#About">About</Link>
              </li>
              <li className="border md:border-1 md:border-slate-600 rounded-xl ">
                <Link to="/#projects">Projects</Link>
              </li>
              <li className="border md:border-1 md:border-slate-600 rounded-xl ">
                <Link to="#blogs">Blogs</Link>
              </li>
              <li className="border md:border-1 md:border-slate-600 rounded-xl ">
                <Link to="/#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
