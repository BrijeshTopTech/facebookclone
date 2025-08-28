import React, { useEffect, useState } from "react";
import "../css/feed.css";
import StoryReels from "./StoryReels";
import DraftPost from "./DraftPost";
import Post from "./Post";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = collection(db, "posts");
      const postsQuery = query(
        collection(db, "posts"),
        orderBy('timestamp', 'desc')
      );
      const postsSnapshot = await getDocs(postsQuery);
      const postsList = postsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsList);
    };

    fetchPosts();
  }, []);

  console.log(posts);

  const story_reels = [
    {
      avatarSrc:
        "https://cdn2.futurepedia.io/2024-11-26T18-51-51.356Z-MtXWJEI4O08DkXhcFo8z7VXOEe00XPWLb.webp?w=1920",
      profileName: "John Doe",
      storyBackground:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRosAlimSOU7p1QgFJK7OR5K2gvVQqZ2ZU7Jw&s",
    },
    {
      avatarSrc:
        "https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA",
      profileName: "Luna Weigel",
      storyBackground:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0vYzhUUwm6VMttEgyipRv1xtbXH13YJeNtQ&s",
    },
    {
      avatarSrc:
        "https://cdn2.futurepedia.io/2024-11-26T18-51-51.356Z-MtXWJEI4O08DkXhcFo8z7VXOEe00XPWLb.webp?w=1920",
      profileName: "John Doe",
      storyBackground:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRosAlimSOU7p1QgFJK7OR5K2gvVQqZ2ZU7Jw&s",
    },
    {
      avatarSrc:
        "https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA",
      profileName: "Luna Weigel",
      storyBackground:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0vYzhUUwm6VMttEgyipRv1xtbXH13YJeNtQ&s",
    },
    {
      avatarSrc:
        "https://cdn2.futurepedia.io/2024-11-26T18-51-51.356Z-MtXWJEI4O08DkXhcFo8z7VXOEe00XPWLb.webp?w=1920",
      profileName: "John Doe",
      storyBackground:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRosAlimSOU7p1QgFJK7OR5K2gvVQqZ2ZU7Jw&s",
    },
  ];

  const post_data = [
    {
      avatar_url:
        "https://cdn2.futurepedia.io/2024-11-26T18-51-51.356Z-MtXWJEI4O08DkXhcFo8z7VXOEe00XPWLb.webp",
      profile_name: "John Doe",
      post_title: "Beautiful Nature",
      post_data_url:
        "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
      time_stamp: "07:00 PM",
    },
    {
      avatar_url:
        "https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA",
      profile_name: "Luna Weigel",
      post_title: "Vacation Time",
      post_data_url:
        "https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?size=626&ext=jpg",
      time_stamp: "07:00 PM",
    },
  ];

  return (
    <div className="feed">
      <div className="storyReel">
        {story_reels.map((story, indx) => (
          <StoryReels
            key={indx}
            avatarSrc={story.avatarSrc}
            profileName={story.profileName}
            storyBackground={story.storyBackground}
          />
        ))}
      </div>
      <DraftPost />
      {
        // post_data.map((post,index) => (
        //     <Post key={index} avatar_url={post.avatar_url} profile_name={post.profile_name} post_title={post.post_title} post_data_url={post.post_data_url} time_stamp={post.time_stamp} />
        // ));

        posts.map((post) => (
          <Post
            key={post.id}
            avatar_url={post.photourl}
            profile_name={post.username}
            post_title={post.message}
            post_data_url={post.image}
            time_stamp={post.timestamp}
          />
        ))
      }
    </div>
  );
};

export default Feed;
