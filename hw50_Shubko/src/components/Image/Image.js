// import { Component } from "react";
import "./Image.css";
const Image = ({ className, src, alt, onClick, name, value }) => {
  return (
    <div className="emoji-holder">
      <img
        className={className}
        name={name}
        src={src}
        alt={alt}
        onClick={onClick}
      />
      <p> This Smile has {value} points</p>
    </div>
  );
};

export default Image;
