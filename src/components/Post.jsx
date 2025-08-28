import React from "react";
import "../css/post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import { format } from 'date-fns';


const Post = ({avatar_url, profile_name, post_title, post_data_url, time_stamp}) => {
  return (
    <div className="post">
      <div className="post__top">
        <div className="post__topLeft">
          <Avatar src={avatar_url} />
          <div className="postInfo">
            <h4>{profile_name}</h4>
            <p>{format(time_stamp.toDate(), 'PPpp')} <PublicIcon /></p>
          </div>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__middle">
        <p>{post_title}</p>
        { post_data_url &&  
        <img src={post_data_url} />
        }
      </div>
      <div className="post__bottom">
        <div className="bottom__options">
            <ThumbUpOffAltIcon />
            <p>Like</p>
        </div>
        <div className="bottom__options">
            <ChatBubbleOutlineIcon />
            <p>Comment</p>
        </div>
        <div className="bottom__options">
            <ShareIcon />
            <p>Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
