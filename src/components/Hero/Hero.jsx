import React from "react";
import "./Hero.css";
import CountUp from 'react-countup';
function Hero() {
  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-container">
          <div className="hero-left">
            <div className="hero-title">
              <div className="orange-circle"></div>
              <h1>
                Discover
                <br /> More Suitable <br />
                Property
              </h1>
            </div>
            <div className="hero-des">
              <p className="secn-txt">Find a varities of properties That Suits You</p>
            </div>
            <div className="search-bar">
            <input className="search" type="text" placeholder="Search.."/>
            </div>
            <div className="flexCenter stats">
              <div className=" flexColCenter stat">
                <span>
                  <CountUp start={9000} end={12000} duration={4}/>
                  <span> + </span>
                  </span>
                  <span className="secn-txt">Premium Products</span>
            
              </div>
              <div className=" flexColCenter stat">
                <span>
                  <CountUp start={200} end={500} duration={4}/>
                  <span> + </span>
                  </span>
                  <span className="secn-txt">Happy Customers</span>
            
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={0} end={50} duration={4}/>
                  <span> + </span>
                  </span>
                  <span className="secn-txt">Award Winning</span>
            
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="image-container">
              <img src="./images/hero-image.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
