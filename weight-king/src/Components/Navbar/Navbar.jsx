import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../Navbar/logo.png"; // Import your logo image here

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shopnow">Shop Now</Link>
            </li>
            <li>
              <Link>Profile</Link>
            </li>
            <li>
              <Link>About Us</Link>
            </li>
          </ul>
        </div>
        {/* Logo container with offline image */}
        <div className="logo-container">
          {/* Logo image with width and height set to 100 by 100 */}
          <img src={logoImage} alt="Your Logo" className="logo" style={{ width: 200, height: 80 }} />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shopnow">Shop Now</Link>
          </li>
          <li>
            <Link>Profile</Link>
          </li>
          <li>
            <Link>About Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/signup" className="btn">Register</Link>
      </div>
    </div>
  );
}

export default Navbar;
