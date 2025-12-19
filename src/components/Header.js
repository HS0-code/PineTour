import "./Header.css";

const Header = () => {
  return (
    <div id="header">
      <img src="logo.png" alt="" width="100px" />

      <div id="navbar">
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div id="profile">EN</div>
    </div>
  );
};

export default Header;
