"use client";
import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";

const Banner = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  
  useEffect(() => {

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    window.addEventListener("scroll", () => {
      setScrollValue(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScrollValue(window.scrollY);
      });
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-full flex items-end relative mb-7">
      <motion.div
        style={{
          transform: `translate(0px,${
            scrollValue > 923 ? 923 * 1.3 : scrollValue * 1.3
          }px)`,
        }}
        className={` w-[75px] h-[75px] absolute top-0 left-2 bg-secundary -z-10`}
      ></motion.div>
      <div className="flex  h-[90%] bg-primary z-10 overflow-hidden xs:w-[85%] 2xl:w-[90%]">
        <Carousel />
      </div>
      <motion.div
        style={{ top: `
        ${windowSize.width>800?(scrollValue * 0.7>700?`${700}px`:`${scrollValue * 0.7}px`):`${scrollValue * 0.7}px`}
        ` }}
        className="flex items-center justify-center bg-primary   h-full  absolute  right-0 overflow-hidden z-0 xs:w-[15%] 2xl:w-[10%]"
      >
        <img
          className="w-[85%]"
          src={"/logo-kubikando.svg"}
          alt="logo kubikando"
        />
      </motion.div>
    </div>
  );
};

export default Banner;
