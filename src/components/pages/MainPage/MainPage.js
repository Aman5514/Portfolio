import React from "react";
import "./MainPage.scss";
import { FiSettings } from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import profile from "../../assets/image/profile.jpg";
import Tooltips from "../../common/ReusableComponent/Tooltips/Tooltips";
const MainPage = () => {
  return (
    <div className="MainPage_container" id="Home">
      <div className="left_side_container">
        <h1>Hi! I'm Aman Gupta</h1>
        <h2>
          <span>UX/UI</span> Developer
        </h2>
        <br />
        <p>Designing user interfaces over 2 years</p>
        <p>as a product designer</p>
        <div className="button_container">
          <button className="color_button">Hire Me</button>
          <button className="plain_button">
            Projects <FiSettings className="project_icon" />
          </button>
        </div>
      </div>
      <div className="right_side_container">
        <div className="image_container">
          <Tooltips
            icon={
              <FaReact
                className="icon_rotate_animation"
                size={28}
                color="dodgerblue"
              />
            }
            title={"React Developer"}
            top={100}
            right={130}
          />
          <Tooltips
            icon={
              <FaNodeJs
                size={28}
                color="green"
              />
            }
            title={"Nodejs Developer"}
            top={210}
            left={290}
          />
          <img src={profile} alt="profile" />
          <Tooltips
            icon={
              <SiMongodb
                size={28}
                color="green"
              />
            }
            title={"Love MongoDB"}
            top={-50}
            right={100}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
