import React from "react";
import "./Header.scss";
import { GiBugleCall } from "react-icons/gi";
const Header = () => {
  const menu = ["Home", "Works", "About", "Projects", "Sevices"];
  return (
    <div className="header_container">
      <div className="header_logo">Personal.</div>
      <div className="header_menu">
        <ul>
          {menu.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <div className="header_Button">
        Contact us
        <GiBugleCall size={20} color="white" />
      </div>
    </div>
  );
};

export default Header;
