import { useState, useEffect } from "react";
import logo from "./../../assets/logo.png";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  useEffect(() => {
    console.log("Use Effect called");
  }, []);

  return (
    <div id="header">
      <div id="logo">
        <img src={logo} alt="" />
      </div>
      <div id="nav-items">
        <h2>Home</h2>
        <h2>About Us</h2>
        <h2>Contact Us</h2>
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
