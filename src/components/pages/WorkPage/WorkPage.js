import React from "react";
import "./WorkPage.scss";
const WorkPage = () => {
  return (
    <div className="workPage_container" id="Works">
      <div className="skills_container">
        <h1>Skill &</h1>
        <h1>Experience</h1>
        <p>
          A Specialist in UI/UX design. A passion of mine is designing and
          solving problems through user experience, primarily on mordern web UI
        </p>
        <p>
          Strong Knowledge in <b>MERN Stack</b> with vast experience in building
          Web Applications, used <b>React.js</b> for client side,
          <b>Node.js / Express</b> for server side <b>MongoDB</b> for database
        </p>
      </div>
      <div className="experience_container">
        <h3>Experties</h3>
        <div className="experience_item">
          <hr />
          <p>
            React.js/Redux to build Interface , strong knowledge of state store
            , middleware , action creator , reducer and container.
          </p>
          <hr />
          <p>
            Extensive experience in developing Restful web services with Express
            and Node.js
          </p>
          <hr />
          <p>Hands-on Experience in working with GIT</p>
          <hr />
          <p>
            Deep understanding with advanced JavaScript concepts such as
            Closure, Scope Chain and Promise.
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
