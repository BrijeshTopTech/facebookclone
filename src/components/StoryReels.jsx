import { Avatar } from "@mui/material";
import React from "react";
import '../css/story.css'

const StoryReels = ({ avatarSrc, profileName, storyBackground }) => {
  return (
    
      <div className="story" style={{backgroundImage: `url(${storyBackground})`}}>
        <Avatar src={avatarSrc} />
        <h3>{profileName}</h3>
      </div>
    
  );
};

export default StoryReels;
