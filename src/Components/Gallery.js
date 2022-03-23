import React, { useState, useEffect } from "react";
import "./Gallery.css";

const Gallery = ({ gallery }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="gallery">

      {gallery
        .concat()
        .reverse()
        .map((image, key) => {
          return (
           

            <div key={key} >
              <img  src={image.photo} className="image" />
            </div>
           

          );
        })}

    </div>
  );
};

export default Gallery;
