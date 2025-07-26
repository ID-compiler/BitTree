"use client"
import React, { useRef } from "react";
import './TiltiImage.css';

const TiltImage = () => {
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = imageRef.current;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / rect.height) * 50;
    const rotateY = (x / rect.width) * 50;

    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const resetRotation = () => {
    imageRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      className="tilt-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetRotation}
    >
      <img
        src="/img1.png"
        alt="Tilted Card"
        ref={imageRef}
        className="tilt-image w-[95%]"
      />
    </div>
  );
};

export default TiltImage;
