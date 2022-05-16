import React from "react";
import hashedin_logo from "../logo/Logo-2.png";
import userlogo from "../logo/userlogo.png";
import cartlogo from "../logo/cartlogo.png";

const Header = () => {
  return (
    <header className="header_container">
      <div className="logo">
        <img src={hashedin_logo} alt="HashedIn Logo" />
      </div>
      <div>
        <nav className="header-option">
          <li>
            <a className="headerFont">COURSES</a>
          </li>
          <li>
            <a className="headerFont">MY WISHLIST</a>
          </li>
          <li>
            <a className="cartLogo">
              <img src={cartlogo} alt="Google logo" />
            </a>
          </li>
          <li>
            <a className="cartLogo">
              <img src={userlogo} alt="Google logo" />
            </a>
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Header;
