import React, { useState, useEffect } from "react";
import "./Gallery.css";
import axios from "axios";

const Gallery = ({ getGallery,gallery, setGallery }) => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('')

  const deleteHandler = async (id) => {
    
  
      await axios.delete(`https://muradspinterest.herokuapp.com/delete/${id}`);
      getGallery();
 
  };
  return (
    <div className="gallery">
      {gallery
        .concat()
        .reverse()
        .map((image, key) => {
          return (
            <div key={key} className="container">
              <img src={image.photo} className="image" />
              <div className="middle">
                <button onClick={() => deleteHandler(image._id)}>Delete</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Gallery;
