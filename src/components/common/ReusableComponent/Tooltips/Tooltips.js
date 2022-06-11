import React from "react";
import "./Tooltips.scss";
const Tooltips = ({ title, icon, top, right, bottom, left }) => {
  return (
    <div
      style={{ top: top, right: right, bottom: bottom, left: left }}
      className="tooltip_container"
    >
      {icon}
      {title}
    </div>
  );
};

export default Tooltips;
