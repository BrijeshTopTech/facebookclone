import React from "react";
import "./css/header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import GroupIcon from "@mui/icons-material/Group";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppsIcon from "@mui/icons-material/Apps";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Avatar, IconButton } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
          alt="Facebook"
        />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <OndemandVideoIcon fontSize="large" />
        </div>
        <div className="header__option">
          <GroupIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SportsEsportsOutlinedIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src="https://m.media-amazon.com/images/I/91GXbWO4sTL.jpg" />
          <h5>Brijesh Kumar</h5>
        </div>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
