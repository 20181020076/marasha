"use client";
import React, { useState } from "react";
import { Burger } from "./Icons";
import Menu from "./Menu";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const item = {
  initial: {
    height: 0,
    opacity: 0,
  },
  exit: {
    opacity: 0,
    height: 0,
    
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col h-[50px] w-full bg-black ">
      {/* navbar */}

      <header className=" flex h-full  w-full items-center relative justify-center">
        <div
          className="ml-3 bg-primary  absolute left-2"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Burger state={isOpen} />
        </div>
        <div className={`flex items-center text-white z-50  ${isOpen?"fixed mt-10":""}`}>
          <Image width={78} height={22} src={"/Logo-marasha.svg"} alt="logo"/>
        </div>
      </header>
      {/* menu */}

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            variants={item}
            initial="initial"
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: .3 }}
            exit={"exit"}
            className="z-30"
            
          >
            <Menu />
          </motion.div>
        ) : (
          <div></div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
