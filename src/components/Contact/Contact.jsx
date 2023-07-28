import React from "react";
import "./Contact.css";
import { BsFillChatDotsFill } from "react-icons/bs";
import {MdCall} from "react-icons/md"
import {HiMiniChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* LEFT SIDE */}
        <div className="flexColStart c-left">
          <span className="orangeText">Contact Us</span>
          <span className="primaryText">Get in Touch</span>
          <span className="secondaryText">
            We are here to assist you with any questions or inquiries you may
            have.
            <br />
            Our dedicated team is ready to provide you with the best solutions
            and support.
          </span>

          <div className="flexColStart ContactModes">
            {/* FIRST row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 111 111 109 </span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
            
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">021 111 111 109 </span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>
            
          
            </div>


            {/* Second   row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiMiniChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">021 111 111 109 </span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
            
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">021 111 111 109 </span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            
          
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="flexCenter c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
