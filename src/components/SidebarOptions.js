import React from "react";
import "./SidebarOptions.css";

const SidebarOptions = ({ title, Icon }) => {
  console.log(title);
  return (
    <div className="sidebarOptions">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

export default SidebarOptions;
