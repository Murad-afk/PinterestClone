/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useRef } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import "./Header.css";
import axios from "axios";
const Header = ({ getGallery,gallery, setGallery, open,setOpen }) => {
  const [image, setImage] = useState();
  const [error, setError] = useState('')
  const handleModel = (e) => {
    setOpen(!open);
  };
  const handlePhoto = (e) => {
    
    setImage(e.target.files[0]);
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    setOpen(!open);

    try {
      let imageUrl = "";
      if (image) {

        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "rofaosqf");
        formData.append("cloud_name", "dmx2wg6tm");

        const dataRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dmx2wg6tm/image/upload",
          formData
        );

        imageUrl = dataRes.data.url;
      }
      const submitPost = {
        image: imageUrl,
      };

      await axios.post("https://muradspinterest.herokuapp.com/add", submitPost);
      getGallery()
      setImage('')
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };
  return (
    <div className="header">
      <div className="nav">
        <img
          src="https://i.pinimg.com/originals/0d/ea/4a/0dea4ad3030467e2f65cde00935ba62b.png"
          className="logo"
        />

        <input type="text" className="search-input" placeholder="Search" />
        <NotificationsIcon color="action" fontSize="large" className="icon" />
        <AddAPhotoIcon
          color="action"
          fontSize="large"
          className="add-icon icon"
          onClick={handleModel}
        />
      </div>
      {open ? (
        <form
          onSubmit={handleSubmit}
          className="popup"
        >
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            filename="testImage"
            onChange={handlePhoto}
          />
          <button>Submit</button>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
