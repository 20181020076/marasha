import React, {useEffect} from "react";
import { motion } from "framer-motion";
import apartaments from "../utils/apartaments";

const CardDescription = ({ selectedId, setSelectedId }) => {
  
  return (
    
    <motion.div layoutId={selectedId} className="fixed top-0 w-full h-screen  flex justify-center items-center z-50 ">
      <motion.div className="relative w-full h-full flex flex-col items-center justify-center">
        <motion.div
          onClick={() => setSelectedId(null)}
          className="absolute w-full h-full border-black blur-[5px] bg-black bg-opacity-50 flex justify-center items-center z-10"
        ></motion.div>
        <motion.div
          
          className="w-[90%] h-[90%] bg-purple border border-red-200 z-20 bg-white flex items-center rounded-xl overflow-y-auto relative  xs:flex-col"
        >
          {/* image */}
          <motion.div className=" w-[90%]  bg-primary mt-3 mb-6 rounded-2xl relative  object-fill">
            <motion.img
              src={apartaments.find((apto) => apto.id === selectedId).image}
              className="w-full "
            />

            {/* iconos */}
            <motion.div className="flex justify-center w-full absolute -bottom-5">
            <motion.div className="w-[175px] h-[50px] bg-secundary rounded-2xl"></motion.div>

            </motion.div>
          </motion.div>

          <motion.h5>
            {apartaments.find((apto) => apto.id === selectedId).title}
          </motion.h5>
          <motion.h2>
            {apartaments.find((apto) => apto.id === selectedId).description}
          </motion.h2>
          <motion.h2>
            {apartaments.find((apto) => apto.id === selectedId).descriptionLarga}
          </motion.h2>

          <motion.button onClick={() => setSelectedId(null)}>
            <div>
                
            </div>
          </motion.button>
          <motion.div className="absolute top-6 right-5 flex flex-col " onClick={() => setSelectedId(null)}>
            <div className="rotate-[50deg] w-5 h-1 bg-white"></div>
            <div className="-rotate-[50deg] w-5 h-1 bg-white"></div>


          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CardDescription;
