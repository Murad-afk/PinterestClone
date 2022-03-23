import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Components/Header";
import Gallery from "./Components/Gallery";

function App() {
  const [gallery, setGallery] = useState([]);
  const [open, setOpen] = useState(false);

  const getGallery = async() =>{
    const galleryRes = await axios.get('http://localhost:5000/gallery')
    setGallery(galleryRes.data)
  }

  useEffect(() => {
   getGallery()
    
  }, []);
  return (
    <div className="App">
      <Header getGallery={getGallery} gallery={gallery} open={open} setOpen={setOpen} setGallery={setGallery} />

     <Gallery gallery={gallery} />
    </div>
  );
}

export default App;
