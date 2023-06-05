import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import apartaments from "../utils/apartaments";

const CardDescription = ({ selectedId, setSelectedId }) => {
  return (
    <AnimatePresence>
      <motion.div className="fixed h-screen w-screen top-0 left-0 z-50 bg-black bg-opacity-50" onClick={()=>{setSelectedId(null)}}>
        <motion.div
          layoutId={selectedId}
          className="flex h-full justify-center items-center"
        >
          <motion.div className="w-[90%] h-[90%]  border border-red-200 z-20 bg-white flex items-center rounded-xl overflow-y-auto relative  xs:flex-col">
            {/* image */}
            <motion.div className=" w-[90%]  bg-primary mt-3 mb-6  relative rounded-[14px]">
              <motion.img
                src={apartaments.find((apto) => apto.id === selectedId).image}
                className="w-full rounded-[14px]"
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
              {
                apartaments.find((apto) => apto.id === selectedId)
                  .descriptionLarga
              }
            </motion.h2>

            <motion.button onClick={() => setSelectedId(null)}>
              <div></div>
            </motion.button>
            <motion.div
              className="absolute top-6 right-5 flex flex-col "
              onClick={() => setSelectedId(null)}
            >
              <div className="rotate-[50deg] w-5 h-1 bg-white"></div>
              <div className="-rotate-[50deg] w-5 h-1 bg-white"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CardDescription;
