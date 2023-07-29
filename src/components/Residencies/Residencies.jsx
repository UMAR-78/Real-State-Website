import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css"; // built in css of swiper
import "./Residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
// import ' swiper/css/Autoplay'  

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        {/* <SliderButtons /> */}
        <Swiper {...sliderSettings}
         autoplay = {true}
        // modules={[Autoplayer]}
        
        >
         
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="" />

                <span className="secondaryText r-price">
                  <span className="dollarsigin">$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

