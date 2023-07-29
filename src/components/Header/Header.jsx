import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
// import { useState } from "react";
import OutSideClickHandler from "react-outside-click-handler"
import {Link} from 'react-scroll'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyle = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return {
        right: !menuOpened ? "-100%" : 0,
      };
    }
  };

  return (
    <>
      <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
          <img src="./logo.png" alt="logo" srcset="" width={100} />
          <OutSideClickHandler
          onOutsideClick={()=>setMenuOpened(false)}>
            <div className="flexCenter h-menu" style={getMenuStyle(menuOpened)}>
              <Link to = 'residencies' spy = {true}  smooth = {true} offset={50} duration={200}>Residencies</Link>
              <Link to = 'values' spy = {true}  smooth = {true} offset={50} duration={200}>Our Values</Link>
              {/* <Link to = '' spy = {true}  smooth = {true} offset={50} duration={200}>Contact Us</Link> */}
              <Link to = 'getstarted' spy = {true}  smooth = {true} offset={50} duration={200}>Get Started</Link>
              <button className="button">
              <Link to = 'contact' spy = {true}  smooth = {true} offset={50} duration={200}>Contact</Link>
              </button>
            </div>
          </OutSideClickHandler>
          <div
            className="menu-icon"
            onClick={() => setMenuOpened((prev) => !prev)}
          >
            <BiMenuAltRight size={30} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
