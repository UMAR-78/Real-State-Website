import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
// import { useState } from "react";
import OutSideClickHandler from "react-outside-click-handler";

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
              <a href="#">Residencies</a>
              <a href="#">Our Values</a>
              <a href="#">Contact Us</a>
              <a href="#">Get Started</a>
              <a href="#">Contact</a>
              <button className="button">
                <a href="#">Contact</a>
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
