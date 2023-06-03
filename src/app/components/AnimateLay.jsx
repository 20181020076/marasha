"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import apartaments from "../utils/apartaments";
import Card from "./Card";
import CardDescription from "./CardDescription";
const AnimateLay = () => {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div className="flex justify-center items-center my-5 w-full relative " >
      <motion.div className="flex w-full justify-center items-center  flex-wrap xs:flex-col xs:gap-8">
         {apartaments.map((apto, index) => {
        return (
          
            <Card
            layoutId={apto.id}
              apto={apto}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              side={index % 2 !== 0 ? "right" : "left"}
              key={apto.id}
              index={index}
            />
        );
      })}
      </motion.div>
     
      <AnimatePresence>
        {selectedId && (
            

          <CardDescription selectedId={selectedId} setSelectedId={setSelectedId}/>
          
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimateLay;
