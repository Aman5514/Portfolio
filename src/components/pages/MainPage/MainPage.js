import React from "react";
import "./MainPage.scss";
import { FiSettings } from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import profile from "../../assets/image/profile.jpg";
import Tooltips from "../../common/ReusableComponent/Tooltips/Tooltips";
const MainPage = () => {
  return (
    <div className="MainPage_container">
      <div className="left_side_container">
        <h1>Hi! I'm Aman Gupta</h1>
        <h2>
          Developer <span>UX/UI</span>
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
        <Tooltips
          icon={
            <FaReact
              className="icon_rotate_animation"
              size={28}
              color="dodgerblue"
            />
          }
          title={"React Developer"}
          top={110}
          right={-20}
        />
        <Tooltips
          icon={
            <FaNodeJs
              // className="icon_rotate_animation"
              size={28}
              color="green"
            />
          }
          title={"Nodejs Developer"}
          top={220}
          left={450}
        />
        <div className="image_container">
          <img src={profile} />
        </div>
        <Tooltips
          icon={
            <SiMongodb
              // className="icon_rotate_animation"
              size={28}
              color="green"
            />
          }
          title={"MongoDB Database"}
          top={-50}
          right={-50}
        />
      </div>
    </div>
  );
};

export default MainPage;
