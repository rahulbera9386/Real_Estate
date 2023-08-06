import React from "react";
import "./Residencies.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/slides";
function Residencies() {
  
  return (
    <>
      <div className="r-wrapper">
        <div className="r-container">
          <div className="r-head">
            <span className="r-text1">Best Choices</span>
            <span className="r-text2">Popular Residencies</span>
          </div>
          <Swiper {...sliderSettings}>
            {
              data.map((card,i)=>(
                <SwiperSlide key={i}>
                  <div className="r-card">
                    <img src={card.image} alt="home"/>
                    <span className="r-price">
                      <span >{card.price}</span>
                      </span>
                      <span className="name">{card.name}</span>
                      <span className="detail">{card.detail}</span>
                    
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Residencies;
