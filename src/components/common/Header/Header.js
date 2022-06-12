import React from "react";
import "./Header.scss";
import { GiBugleCall } from "react-icons/gi";
import { Link } from "react-scroll";

const Header = () => {
  const menu = ["Home", "Works", "About", "Projects", "Sevices"];
  return (
    <div className="header_container">
      <div className="header_logo">Personal.</div>
      <div className="header_menu">
        <ul className="navbar">
          {menu.map((item, key) => (
            <Link
              activeClass="active"
              key={key}
              to={item}
              smooth={true}
              duration={800}
              offset={-80}
              spy={true}
            >
              {item}
            </Link>
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
