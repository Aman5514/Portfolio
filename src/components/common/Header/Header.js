import React, { useState } from "react";
import "./Header.scss";
import { GrClose } from "react-icons/gr";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-scroll";

const Header = () => {
  const menu = ["Home", "Works", "Projects", "Sevices"];
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div className="header_container">
        <div className="header_logo">
          Personal <span className="dot">.</span>
        </div>
        <div className="header_menu">
          {/* <input
            className="menu-btn"
            type="checkbox"
            id="menu-btn"
            defaultChecked={checked}
            onChange={() => setChecked((data) => !data)}
          />
          <label className="menu-icon" htmlFor="menu-btn">
            <span
              className={ "navicon"}
            ></span>
          </label> */}
          {!checked ? (
            <RiMenu3Fill
              className="menu-icon"
              onClick={() => setChecked((data) => !data)}
            />
          ) : (
            <GrClose
              className="menu-icon"
              onClick={() => setChecked((data) => !data)}
            />
          )}
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
        {/* <div className="header_Button">
        Contact us
        <GiBugleCall size={20} color="black" />
      </div> */}
      </div>
      <div
        style={{
          transform: !checked && "translateX(-200%)",
        }}
        className={"header_line"}
      >
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
              onClick={() => setChecked((data) => !data)}
            >
              {item}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
