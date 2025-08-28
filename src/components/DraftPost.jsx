import React, { useState } from "react";
import "../css/DraftPost.css";
import { Avatar, Button, IconButton, Modal, Typography } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import MoodIcon from "@mui/icons-material/Mood";
import CloseIcon from "@mui/icons-material/Close";
import { db, storage } from "../firebase";
import { collection, addDoc, getDocs, orderBy, query } from "firebase/firestore";

const DraftPost = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Post Upload Function start
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  const handleMessage = (e) => {
    setMessage(e.target.value);
    console.log(message);
    
  }
  const uploadFileWithClick = () => {
    document.getElementById("inputFile").click();
  };
  const handleChange = (e) => {
    // Capture the file from the input
    const file = e.target.files[0];
    setFile(file);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!file) {
      // alert("No file selected!");
      // return;

      db.collection("posts").add()
    }

    // Create a reference to the storage location
    const uploadTask = storage.ref(`files/${file.name}`).put(file);

    // Monitor the upload progress
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get upload progress
        const progressPercentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progressPercentage);
      },
      (error) => {
        // Handle errors
        console.error(error);
      },
      () => {
        // Handle successful upload completion
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          console.log("File available at", url);
          alert("File uploaded successfully!");
        });
      }
    );
  };
  // Post Upload Function end

  return (
    <>
      {/* <BasicModal /> */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal__popup">
          <form>
            <div className="modal__popup__header">
              <h3>Create Post</h3>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </div>
            <div className="modal__popup__body">
              <div className="modal__body__top">
                <Avatar src="https://m.media-amazon.com/images/I/91GXbWO4sTL.jpg" />
                <h4>Brijesh Kumar</h4>
              </div>
              <div className="text__section">
                <textarea
                  rows="4"
                  placeholder="What's in your mind Brijesh Kumar"
                  onChange={handleMessage}
                ></textarea>
              </div>
              <div className="modal__body__bottom">
                <div className="add_to_post">
                  <h3>Add to your post</h3>
                </div>
                <div className="post__type">
                  <IconButton onClick={handleOpen}>
                    <VideoCallIcon fontSize="large" style={{ color: "red" }} />
                  </IconButton>
                  <IconButton onClick={uploadFileWithClick}>
                    <PhotoLibraryIcon
                      fontSize="large"
                      style={{ color: "lightgreen" }}
                    />
                  </IconButton>
                  <input
                    type="file"
                    id="inputFile"
                    onChange={handleChange}
                    style={{ display: "none" }}
                  />
                  <IconButton>
                    <MoodIcon fontSize="large" style={{ color: "orange" }} />
                  </IconButton>
                </div>
              </div>
            </div>
            <div className="modal__popup__footer">
              <button
                type="submit"
                className="post__submit"
                onClick={handleUpload}
              >
                POST
              </button>
              {progress > 0 && <progress value={progress} max="100" />}
            </div>
          </form>
        </div>
      </Modal>

      <div className="draftPost">
        <div className="draft_header__top">
          <Avatar src="https://m.media-amazon.com/images/I/91GXbWO4sTL.jpg" />
          <form>
            <input
              type="text"
              placeholder="What's on your mind Brijesh?"
              onClick={handleOpen}
            />
          </form>
        </div>
        <div className="draft_header__bottom">
          <div className="draft__options" onClick={handleOpen}>
            <VideoCallIcon fontSize="large" style={{ color: "red" }} />
            <p>Live Video</p>
          </div>
          <div className="draft__options" onClick={handleOpen}>
            <PhotoLibraryIcon
              fontSize="large"
              style={{ color: "lightgreen" }}
            />
            <p>Photo/Video</p>
          </div>
          <div className="draft__options" onClick={handleOpen}>
            <MoodIcon fontSize="large" style={{ color: "orange" }} />
            <p>Feeling/Activity</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DraftPost;
