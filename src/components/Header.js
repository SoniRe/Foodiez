import logo from "./../../assets/logo.png";

const Header = () => {
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
      </div>
    </div>
  );
};

export default Header;
