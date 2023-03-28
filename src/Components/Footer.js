import React from "react";
import "./Footer.css";
import logo from "../images/t2a_croped.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={logo} alt="Text2Audio Logo" className="footer-logo" />
        <p id="copyright">Copyright &copy; {year}</p>
      </div>
    </footer>
  );
};

export default Footer;
