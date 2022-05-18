import React from "react";
import hashedin_logo from "../logo/Logo-2.png";
import userlogo from "../logo/userlogo.png";
import cartlogo from "../logo/cartlogo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header_container">
      <div className="logo">
        <NavLink to="/home">
          <img src={hashedin_logo} alt="HashedIn Logo" />
        </NavLink>
      </div>
      <div>
        <div className="header-option">
          <li>
            <NavLink className="headerFont" to="/home">
              COURSES
            </NavLink>
          </li>
          <li>
            <NavLink className="headerFont" to="/not_found">
              MY WISHLIST
            </NavLink>
          </li>
          <li>
            <NavLink className="cartLogo" to="/myCart">
              <img src={cartlogo} alt="Google logo" />
            </NavLink>
          </li>
          <li>
            <NavLink className="cartLogo" to="/myProfile">
              <img src={userlogo} alt="Google logo" />
            </NavLink>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Header;
