import React from "react";
import "./Miny.css";
export default function Miny() {
  return (
    <>
      <div className="miny d-flex  bg-light ">
        <div className="flag1 d-flex gap-5  ">
          <img
            src="//phono-demo.myshopify.com/cdn/shop/files/free-deliver-icon.png?v=1613704488&amp;width=275"
            srcset="//phono-demo.myshopify.com/cdn/shop/files/free-deliver-icon.png?v=1613704488&amp;width=275 275w"
            loading="lazy"
            sizes="(min-width: 990px) 550px, (min-width: 750px) 550px, calc(100vw - 30px)"
            alt="a"
          />
          <div className="title gap-5 ">
            <h1>FREE SHIPPING</h1>
            <p>For order 50$</p>
          </div>
        </div>
        <div className="">
          <div className="flag1 d-flex gap-5  ">
            <img
              src="//phono-demo.myshopify.com/cdn/shop/files/offers-icon.png?v=1613704488&amp;width=275"
              srcset="//phono-demo.myshopify.com/cdn/shop/files/offers-icon.png?v=1613704488&amp;width=275 275w"
              loading="lazy"
              sizes="(min-width: 990px) 550px, (min-width: 750px) 550px, calc(100vw - 30px)"
              alt="a"
            />
            <div className="title">
              <h1>FREE SHIPPING</h1>
              <p>For order 50$</p>
            </div>
          </div>
        </div>
        <div className="ak">
          <div className="flag1 d-flex gap-5  ">
            <img
              src="//phono-demo.myshopify.com/cdn/shop/files/support-icon.png?v=1613704488&amp;width=275"
              srcset="//phono-demo.myshopify.com/cdn/shop/files/support-icon.png?v=1613704488&amp;width=275 275w"
              loading="lazy"
              sizes="(min-width: 990px) 550px, (min-width: 750px) 550px, calc(100vw - 30px)"
              alt=" a"
            />
            <div className="title">
              <h1>FREE SHIPPING</h1>
              <p>For order 50$</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
