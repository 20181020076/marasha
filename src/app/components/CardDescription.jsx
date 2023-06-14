import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import apartaments from "../utils/apartaments";
import { Baños, Parqueaderos } from "./Icons";

const CardDescription = ({ selectedId, setSelectedId }) => {
  const Apto = apartaments.find((apto) => apto.id === selectedId);
  const [apartamentSelected, setApartamentSelected] = useState(0);
  const handleApartamentPlus = (apartament) => {
    if (apartament == Apto.available.length - 1) {
      setApartamentSelected(0);
    } else {
      setApartamentSelected(apartament + 1);
    }
  };
  const handleApartamentMinus = (apartament) => {
    if (apartament == 0) {
      setApartamentSelected(Apto.available.length - 1);
    } else {
      setApartamentSelected(apartament - 1);
    }
  };

  return (
    <AnimatePresence>
      <motion.div className="fixed h-screen w-screen top-0 left-0 z-50 bg-black bg-opacity-50">
        <motion.div
          layoutId={selectedId}
          className="flex h-full justify-center items-center"
        >
          <motion.div className="w-[90%] h-[90%]  border border-red-200 z-20 bg-white flex items-center rounded-xl overflow-y-auto relative  xs:flex-col">
            {/* image */}
            <motion.div className=" w-[90%]  bg-primary mt-3 mb-6  relative rounded-[14px]">
              <motion.img src={Apto.image} className="w-full rounded-[14px]" />

              {/* iconos */}
              <motion.div className="flex justify-center w-full absolute -bottom-5">
                <motion.div className="flex justify-center w-[175px] h-[50px] bg-secundary rounded-2xl text-white">
                 
                  <div className="flex flex-col justify-end items-center w-10  h-full ">
                    <img src="/Ico_cuartos.svg" alt="cuartos" className="w-6"/>
                    <span>1</span>
                  </div>
                  <div className="flex flex-col justify-end items-center w-10  h-full ">
                    <img src="/Ico_baño.svg" alt="" className="w-6" />
                    <span>2</span>
                  </div>
                  <div className="flex flex-col justify-end items-center w-10 h-full ">
                    <img src="/Ico_parqueadero.svg" alt="parqueadero"  className="w-6"/>
                    <span>1</span>
                  </div>
                  <div className="flex flex-col justify-end items-center  w-10 h-full ">
                    <img src="/Ico_cuartoestudio.svg" alt="" className="w-6"/>
                    <span>1</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.h5>{Apto.title}</motion.h5>
            <motion.div className="flex xs:w-[80%] justify-around items-center">
              <div className=" h-full">
                <img
                  src="/Flecha.svg"
                  alt=""
                  className="rotate-180 w-3 z-50"
                  onClick={() => handleApartamentMinus(apartamentSelected)}
                />
              </div>
              {Apto.available[apartamentSelected]}
              <img
                src="/Flecha.svg"
                alt=""
                className="w-3 z-50"
                onClick={() => handleApartamentPlus(apartamentSelected)}
              />
            </motion.div>

            {/* {Apto.available.map((disponible) => {
              return <div>{disponible}</div>;
            })} */}

  
            <motion.h2>
              <span className="xs:mr-6 font-bold">Apartamento: </span>
              {
                Apto.prices[apartamentSelected].apartamento
              }
              <span className="font-bold"> COP</span>
            </motion.h2>
            <motion.h2>
              <span className="xs:mr-6 font-bold">Parqueadero: </span>
              {
                Apto.prices[apartamentSelected].parqueadero
              }
              <span className="font-bold"> COP</span>
            </motion.h2>
            <motion.h2>
              <span className="xs:mr-6 font-bold">Deposito: </span>
              {
                Apto.prices[apartamentSelected].deposito
              }
              <span className="font-bold"> COP</span>
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
