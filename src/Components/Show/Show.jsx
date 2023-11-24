import React from "react";
import "./Show.css";
import mob from "../../assets/img/mobile2_slider.png";
import ico1 from "../../assets/img/ic1.png";
import ico2 from "../../assets/img/ic2.png";
import ico3 from "../../assets/img/ic3.png";
import ico4 from "../../assets/img/ic4.png";
import ico5 from "../../assets/img/ic5.png";
import ico6 from "../../assets/img/ic6.png";
export default function Show() {
  return (
    <>
      <div className="titleh text-center ">
        <h1>INNOVATIVE QUALITIES & FEATURES</h1>
        <p>SHOW YOURS TO THE WORLD</p>
      </div>
      <div className="all d-flex justify-content-center align-items-center text-center  ">
        <div className="row">
          <div className="col-lg-12 d-flex   ">
            <div className="icon-left">
              <img src={ico1} alt="" />
              <h3>
                <a href="">4.0 WIFI SPECS</a>
              </h3>
              <p>
                Commodo nulla facilisi nullam vehicula ipsum a arcu sagitis
                ipsum sed iacus.
              </p>
              <img src={ico2} alt="" />
              <h3>
                {" "}
                <a href="">CLOUD STORAGE </a>
              </h3>
              <p>
                Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididun
              </p>

              <img src={ico3} alt="" />
              <h3>
                <a href=""> STYLISH BEVEL EDGES</a>
              </h3>
              <p>
                Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incidid
              </p>
            </div>

            <div className="img-center">
              <img src={mob} alt="" />
            </div>
            <div className="icon-right">
              <img src={ico4} alt="" />
              <h3>
                {" "}
                <a href="">MULIT TASKING & THREADING</a>
              </h3>
              <p>
              Amet consectetur adipiscing velit laoreet nega id elit pellentesque habitant morbi .
              </p>
              <img src={ico5} alt="" />
              <h3>
                <a href=""> INTELLIGENT PROCESSOR </a>
              </h3>
              <p> Tellus in hac habitasse platea dictumst vestibulum rhoncus srd
                mana erti qeueri</p>
              <img src={ico6} alt="" />
              <h3><a href=""> HD SURROUND AUDIO</a></h3>
            <p>Sagittis eu volutpat odio ante ut diam quam metus dictfacilisis mauris sit am.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
