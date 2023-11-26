import { useState, useEffect } from "react";
import logo from "./../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div id="header">
      <div id="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div id="nav-items">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <h2>Cart</h2>
        <button
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
