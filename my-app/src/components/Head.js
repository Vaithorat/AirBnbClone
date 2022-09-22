import React from "react";
import Images from "./Images/Group 77.png";

export default function Image() {
  return (
    <>
      <div className="head">
        <img className="nineImages" src={Images} alt="" />
      </div>
      <div className="text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-king hosts-all
          without leaving home.
        </p>
      </div>
    </>
  );
}
