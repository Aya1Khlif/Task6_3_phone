import React from "react";
import "./Power.css";
import host from "../../assets/img/hotspot_2934b3a5-cd7e-49be-b709-8269a17f7390.png";
export default function Power() {
  return (
    <>
      <div className="titlepower text-center mt-5  ">
        <h1>POSSIBILITIES. PERFORMANCE. POWER.</h1>
        <p>FASTER PROCESSING WITH LESS POWER</p>
      </div>
      <div className="img text-center">
        <img src={host} alt="" />
        <div className="ak  d-flex">
          <a href="/"></a>
          <div className="ak2">
            <div className="dt-sc-hotspot-content text-center">
              <img
                srcset="Liquid error (sections/hotspot line 212): invalid url input w"
                sizes="100vw"
                src="//phono-demo.myshopify.com/cdn/shop/files/ic7.png?v=1613704460&amp;width=1500"
                loading="lazy"
                alt=""
                width="53"
                height="53"
              />
              <a href="" title="SCORPION PROCESSOR">
                <h4 className="dt-sc-hotspot-content-title">SCORPION PROCESSOR</h4>
              </a>
              <p>Tristique senectus et netus et malesuada fames ac turpis.</p>
            </div>
          </div>
          <div className="dt-sc-hotspot-content text-center">
            <img
              srcset="Liquid error (sections/hotspot line 212): invalid url input w"
              sizes="100vw"
              src="//phono-demo.myshopify.com/cdn/shop/files/ic10.png?v=1613704460&amp;width=1500"
              loading="lazy"
              alt=""
              width="53"
              height="53"
            />

            <a href="" title="DUAL SIM CARDS">
              <h4 class="dt-sc-hotspot-content-title">DUAL SIM CARDS</h4>
            </a>

            <p>Donec ultrices tincidunt arcu non sodales neque sodales ut.</p>
          </div>
          <div className="dt-sc-hotspot-content text-center">
            <img
              srcset="Liquid error (sections/hotspot line 212): invalid url input w"
              sizes="100vw"
              src="//phono-demo.myshopify.com/cdn/shop/files/ic10.png?v=1613704460&amp;width=1500"
              loading="lazy"
              alt=""
              width="53"
              height="53"
            />

            <a href="" title="DUAL SIM CARDS">
              <h4 class="dt-sc-hotspot-content-title">DUAL SIM CARDS</h4>
            </a>

            <p>Donec ultrices tincidunt arcu non sodales neque sodales ut.</p>
          </div>
          <div id="dt-sc-hotspot-marker4" class="dt-sc-hotspot-popup on-bottom">
            <div className="dt-sc-hotspot-content text-center">
              <img
                srcset="Liquid error (sections/hotspot line 212): invalid url input w"
                sizes="100vw"
                src="//phono-demo.myshopify.com/cdn/shop/files/ic8.png?v=1613704466&amp;width=1500"
                loading="lazy"
                alt=""
                width="53"
                height="53"
              />

              <a href="" title="48 HRS BACKUP">
                <h4 className="dt-sc-hotspot-content-title">48 HRS BACKUP</h4>
              </a>
              <p>Natoque penatibus et magnis dis parturient montes nascetur.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
