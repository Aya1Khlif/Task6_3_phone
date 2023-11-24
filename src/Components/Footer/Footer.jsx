import React from "react";
import "./Footer.css";
import footer from "../../assets/img/footer_ad0f20f1-29b5-4188-8127-a6667ac6aea9.jpg";
const Footer = () => {
  return (
    <>
      <div className="all text-center mt-5 d-flex justify-content-center align-items-center  ">
      <div className="imgfooter  ">
        <img src={footer} alt="" style={{
         width:1500,
         height:200
        }} />
      </div>
      <div className="titleh2-ak text-center  text-white   ">
        <h3>SUBSCRIBE NOW</h3>
        <h1>GET OUR UPDATES ALWAYS FAST</h1>
        <p>YOUR PERSONAL DATA WILL ALWAYS BE SAFE</p>
        <input type="email" placeholder="enter your email" style={{
            borderRadius:20,
            width:250
        }} />
      </div>
      </div>
    </>
  );
};

export default Footer;
