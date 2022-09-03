import React from "react";
import "./Footer.scss";
import { AiTwotoneHeart } from "react-icons/ai";
import { FaFacebookSquare, FaTelegramPlane , FaWhatsapp } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="personal_info">
        <div className="inspirational">
          <div>
            <h3>Mark Zuckerberg - </h3>
            <br />
            <h4>People don't care about what you say, they care about what you
            build.</h4>
          </div>
          <p>aman930530@gmail.com</p>
        </div>
        <div className="about_me">
          <div className="address">
            <h3>Address -</h3>
            <p>Lucknow , Uttar Pradesh , India - 226003</p>
          </div>
          <div className="contact">
            <h3>Phone no -</h3>
            <p>+91 7785979692</p>
          </div>
          <div className="social">
            <FaFacebookSquare size={35} color="white" />
            <GrInstagram size={35} color="white" />
            <FaTelegramPlane size={35} color="white" />
            <FaWhatsapp size={35} color="white" />
          </div>
        </div>
      </div>
      <p className="copyright">
        Copyright © 2022 <AiTwotoneHeart color="red" size={20} /> Developed by
        Aman
      </p>
    </div>
  );
};

export default Footer;
