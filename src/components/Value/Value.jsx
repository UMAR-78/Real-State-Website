import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from "../../utils/accordian";
import {motion} from 'framer-motion'


const Value = () => {
  const [className, setClassName] = useState(null);

  return (
    <section className="v-wrapper" id="values">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <motion.div className="image-container"
            initial = {{x:'-17rem' , opacity: 0}}
            animate ={{x:0 , opacity: 1}}
            transition={{
              delay:0,
              duration: 2,
              type:'ease-in'
            }}
          >
            <img src="./value.png" alt="HeroImage" />
          </motion.div>
        </div>

        {/* right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give To You</span>
          <span className="secondaryText">
            Our team is dedicated to delivering excellence in every aspect
            <br /> of the real estate experience, striving for the highest level
            of customer satisfaction.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  key={i}
                  uuid={i}
                >
                  {/* uuid = universal unique identifier */}
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionItemBUtton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          setClassName(expanded ? "expanded" : "collapsed")
                        }
                      </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
