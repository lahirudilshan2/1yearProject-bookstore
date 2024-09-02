import React, { useEffect } from "react";
import "../css/Home.css";
import axios from "axios";

const Home = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-image"></div>
        <h1 className="hero-text">
          Facultify of Technology University of Sri Lanka
        </h1>
        
        {/* <p className="hero-description">Browse the Collection of our best top References Books.you will definitely find what you are looking for.</p> */}
      </div>
    </div>
  );
};

export default Home;
