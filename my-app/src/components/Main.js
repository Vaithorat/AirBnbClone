import React from "react";
import Images from "./MainImages";

export default function Main() {
  return (
    <>
      <div className="mainImage">
        <div>
          <img className="swim" src={Images.imageSwim} alt="" />
          <p><img className = "star"src={Images.imageStar} alt="" />5.0(6) &#9679; USA</p>
          <p>Life lessons with Katie Zaferes</p>
          <p><span>From $136</span>/person</p>
        </div>
        <div>
          <img className="wed" src={Images.imageWed} alt="" />
          <p><img className = "star"src={Images.imageStar} alt="" />5.0(30) &#9679; USA </p>
          <p>Learn wedding photography</p>
          <p><span>From $125</span>/person</p>
        </div>
        <div>
          <img className="cycle" src={Images.imageCyc} alt="" />
          <p><img className = "star"src={Images.imageStar} alt="" />4.8(2) &#9679; USA</p>
          <p>Group Mountain Bikin</p>
          <p><span>From $50</span>/person</p>
        </div>
      </div>
      <div className="sold">
        <img src={Images.imageSold} alt="" />
      </div>
      <div className="online">
        <img src={Images.imageOnline} alt="" />
      </div>
    </>
  );
}
