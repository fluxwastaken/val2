import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  // Image URLs (Ensure they are inside the "public/val" folder)
  const images = ["/7.jpg","/1.jpg", "/2.jpg", "/3.jpg","/4.jpg","/5.jpg","/6.jpg"];

  // Auto-transition images every 3 seconds with slide effect
  useEffect(() => {
    if (showSlideshow) {
      const interval = setInterval(() => {
        setIsSliding(true);
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
          setIsSliding(false);
        }, 500); // Matches animation duration
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [showSlideshow, images.length]);

  return (
    <div className="container">
      {/* Valentine's Content */}
      <div className={`valentine-content ${showSlideshow ? "slide-out" : ""}`}>
        <div className="heart"></div>
        <h1 className="valentine-message">Happy Valentine's Day!</h1>
        <button className="slide-button" onClick={() => setShowSlideshow(true)}>
          Click me
        </button>
      </div>

      {/* Slideshow Content */}
      <div className={`slideshow-content ${showSlideshow ? "slide-in" : ""}`}>
        
        <div className={`slideshow-image-container ${isSliding ? "slide-animation" : ""}`}>
          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            className="slideshow-image"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
