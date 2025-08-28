import { Avatar, Icon } from "@mui/material";
import React from "react";

const SidebarOption = ({ src, title, Icon }) => {
  return (
    <div className="sidebarItem">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <p>{title}</p>
    </div>
  );
};

export default SidebarOption;
