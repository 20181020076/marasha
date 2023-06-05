import React from "react";
import { motion } from "framer-motion";

const Menu = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className={`flex fixed w-[80%] h-[350px] top-0 pt-[7vh] bg-black justify-center items-center z-20 select-none`}
    >
      <motion.ul className="h-[100%] text-left flex flex-col gap-4 z-20">
        <a href="#home">
          <motion.li className="text-white  overflow-hidden uppercase z-30">
            Home
          </motion.li>
        </a>
        <motion.li className="text-white  overflow-hidden  uppercase z-30">
          <a href="#disponibles">Disponibles</a>
        </motion.li>
        <motion.li className="text-white  overflow-hidden  uppercase z-30">
          <a href="#nosotros">Nosotros</a>
        </motion.li>
        <motion.li className="text-white overflow-hidden  uppercase z-30">
          Otros Proyectos
        </motion.li>
        <motion.li className="text-white overflow-hidden  uppercase z-30">
          <a href="#contacto">Contactenos</a>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default Menu;
