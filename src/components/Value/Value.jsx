import React, { useState } from "react";
import "./Value.css";
import { accordians } from "../../utils/accordian";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
function Value() {
  return (
    <>
      <div className="v-wrapper">
        <div className="v-container">
          <div className="v-left">
            <div className="image-container">
              <img src="./images/value.png" />
            </div>
          </div>
          <div className="v-right">
            <span className="text1">Value For You</span>
            <span className="text2">Value We Give You</span>
            <span className="text3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              eius quod tempore.
            </span>
            <Accordion className="accordian"
            allowMultipleExpanded={false}>
              {
                accordians.map((item,i)=>{
                  return(
                    <AccordionItem className="accordianitem">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <div className="flexcenter icon">
                            {item.id}
                          </div>
                          <span>{item.question}</span>
                          <div className="flexCenter icon">

                          </div>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel className="acc-item-panel">
                        <p>{item.answer}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  )
                })
              }
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default Value;
