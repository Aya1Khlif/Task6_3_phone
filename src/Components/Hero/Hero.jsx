import React from "react";
import "./Hero.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/esm/Button";
import ph from "../../assets/img/phono-slider-3.jpg";
import photo from "../../assets/img/phono-slider-2.jpg";
import gf from "../../assets/img/phono-slider-1.jpg";
const Hero = () => {
  return (
    <>
      <div className="a  ">
        <div className="slider  ">
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <div className="img3">
              <img className="d-block w-100 img3 " src={ph} alt="Third slide" />
              <div className="para2">
                <h2 className="">Full Screen Display</h2>
                <h2 className=" ">Delta Zertiga Processor</h2>
                <Button variant="secondary"> SHOP NOW</Button>{' '}
              </div>
             
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="img2">
                <img
                  className="d-block w-100 img"
                  src={photo}
                  alt="Second slide"
                />
                <div className="para3">
                <h2 className="banner__sub_heading ">4K Resolution</h2>
                <h2 className="banner__heading h0">Exclusive Steel Frame</h2> 
                <Button variant="secondary"> SHOP NOW</Button>{' '}

                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="img1">
                <img className="d-block w-100 img" src={gf} alt="First slide" />
                <div className="para">
                  <h2 className="">Zania Black Edition</h2>
                  <h2 className="">Curvy Bevel Dual Audio</h2>
                  <Button variant="secondary"> SHOP NOW</Button>{' '}
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
       
      </div>
    </>
  );
};

export default Hero;
