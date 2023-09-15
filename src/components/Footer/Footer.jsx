import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* foooter-left */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Our Vision is to make all people <br />
            the place to live for them.
          </span>
        </div>

        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 , New York , FL 4571 , USA</span>

          <div className="f-menus">
            <a href="#">Property</a>
            <a href="#">Service</a>
            <a href="#">Product</a>
            <a href="#">About Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
