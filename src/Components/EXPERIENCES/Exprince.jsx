import React from "react";
import "./Exprince.css";
import icon11 from "../../assets/img/ic11.png";
import ico12 from "../../assets/img/ic12.png";
import ico13 from "../../assets/img/ic13.png";
export default function Exprince() {
  return (
    <>
      <div className="titleH text-center mt-5 bg-white  ">
        <h1>WHAT MAKES THE ESSENTIAL DIFFERENT?</h1>
        <p>EXPERIENCE HIGH PERFORMANCE AND SECURE</p>
      </div>
      <div className="exprince  bg-light">
        <div className="ICON d-flex gap-5 text-center ">
          <div className="icon">
            <img src={icon11} alt="" />
            <h3>PERFECT CUT</h3>
            <h2>DUAL CAMERA</h2>
            <p>Tristique senectus et netus et malesuada ant reiet fames.</p>
          </div>
          <div className="icon2">
            <img src={ico12} alt="" />
            <h3>PRETTY</h3>
            <h2>INTELLIGENT PROCESSING</h2>
            <p>
              Consequat ac habit amet asse felis donec et odio pellentesque
              diam.
            </p>
          </div>
          <div className="icon3">
            <img src={ico13} alt="" />
            <h3>MOST POPULAR</h3>
            <h2>8GB DDR5 RAM</h2>
            <p>
              Dictum varius duis at consectetur lorem donec massa sap faucibus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
