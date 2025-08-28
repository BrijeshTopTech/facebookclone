import React from "react";
import "../css/rightSidebar.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import VideocamIcon from "@mui/icons-material/Videocam";
import SearchIcon from "@mui/icons-material/Search";

const RightSidebar = () => {
  return (
    <div className="right__sidebar">
      <div className="right__sidebar__header">
        <h4>Your Pages</h4>
        <MoreHorizIcon />
      </div>
      <div className="right__sidebar__body">
        <div className="right__sidebar__body_option">
          <Avatar src="https://m.media-amazon.com/images/I/91GXbWO4sTL.jpg" />
          <h4>Brijesh Kumar</h4>
        </div>
        <div className="right__sidebar__body_option">
          <NotificationsNoneOutlinedIcon />
          <p>1 Notification</p>
        </div>
        <div className="right__sidebar__body_option">
          <VolumeUpOutlinedIcon />
          <p>Create Promotions</p>
        </div>
      </div>
      <hr />

      <div className="right__sidebar__header">
        <div className="right__sidebar__header__left">
          <h4>Contacts</h4>
        </div>
        <div className="right__sidebar__header__right">
          <VideocamIcon />
          <SearchIcon />
          <MoreHorizIcon />
        </div>
      </div>
      <div className="right__sidebar__body">
          <div className="right__sidebar__body_option">
            <Avatar />
            <h4>John Doe</h4>
          </div>
          <div className="right__sidebar__body_option">
            <Avatar />
            <h4>Kristen</h4>
          </div>
          <div className="right__sidebar__body_option">
            <Avatar />
            <h4>Wyne Kylie</h4>
          </div>
          <div className="right__sidebar__body_option">
            <Avatar />
            <h4>Jim Minogue</h4>
          </div>
          <div className="right__sidebar__body_option">
            <Avatar />
            <h4>Frank Smith</h4>
          </div>
        </div>
    </div>
  );
};

export default RightSidebar;
