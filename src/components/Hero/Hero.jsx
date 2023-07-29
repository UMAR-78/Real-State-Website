import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
          {/* left section */}
          <div className=" flexColStart hero-left">
            <div className="hero-title">
              <div className="orange-circle" />

              <motion.h1
                initial={{ y: "2rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 2,
                  type: "spring",
                  // ease: [0.6, 0.01, -0.05, 0.9],
                }}
              >
                Discover <br />
                Most Suitable <br />
                Property
              </motion.h1>
            </div>

            <div className="flexColStart secondaryText hero-description">
              <span>Your Gateway to Extraordinary Real Estate.</span>
              <span>Start Your Journey to Homeownership Now.</span>
            </div>

            <motion.div
              className="flexCenter search-bar"
              initial={{ x: "-17rem", opacity: 0 }}
              animate={{ x: -0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              <HiLocationMarker
                className="icon"
                color="var(--blue)"
                size={35}
              />
              <input type="text" />
              <button className="button">Search</button>
            </motion.div>

            <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={800} end={900} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Premium Product</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp start={100} end={200} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Happy Customers</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp end={20} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Award Wining</span>
              </div>
            </div>
          </div>

          {/* right section */}
          <div className="flexCenter hero-right">
            <motion.div
              className="image-container"
              initial={{ y: "7rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              <img src="./hero-image.png" alt="HeroImage" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
