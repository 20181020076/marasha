"use client";
import React, { useState } from "react";
import colors from "../utils/colors";
import { motion, useTransform, useScroll, color } from "framer-motion";
const Carousel = () => {
  const [image, setImage] = useState(0);
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  const handleSetImage = () => {
    setImage(image + 1);
  };

  return (
    <div className="flex w-full h-full relative justify-center">
      <div className="flex w-full h-full items-center overflow-hidden">
        <motion.img
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) }}
          className="xs:h-full  2xl:w-full 2xl:h-auto"
          src="/Foto_edificio.png"
          alt="banner"
        />
      </div>

      <div className="flex w-full absolute bottom-3 gap-[6px]  justify-end xs:pr-[27%] 2xl:pr-[38%]">
        {colors.map((color,index) => {
          return (
            <div
              className="flex rounded-full bg-transparent border border-white  w-4 h-4 justify-center items-center"
              onClick={() => setImage(index)}
              key={index}
            >
              <div
                className={`rounded-full w-4 h-4  ${
                  image === index ? "bg-secundary border border-secundary" : ""
                }`}
              ></div>
            </div>
          );
        })}
        
    
      </div>
    </div>
  );
};

export default Carousel;
