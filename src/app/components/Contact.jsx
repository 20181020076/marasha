"use client";
import React, {useState, useEffect} from "react";
import {
  FacebookIcon,
  WhatsAppIcon2,
  InstagramIcon,
  TwitterIcon,
} from "./Icons";

const Contact = () => {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollValue(window.scrollY);

    });
    return ()=> {
      window.removeEventListener('scroll',() => {
        setScrollValue(window.scrollY);
  
      })
    }
  }, []);
  return (
    <div className=" w-full relative z-0 xs:h-[50vh] 2xl:h-[60vh]">
      {/* caja flotante */}
      <div style={{transform:`translate(0px,${scrollValue<1370?0:(Math.pow(scrollValue-1370,1.005))*-1}px)`}} className="w-[60px] h-[50px] absolute top-0 left-5 bg-secundary -z-50"></div>
      
      <div className="flex justify-center items-center w-full h-full  overflow-hidden">
        <img src="/Fondo_Contacto.png" alt="" className="w-full " />
      </div>
      <div className="flex flex-col w-full h-full text-white absolute top-0 left-0  justify-center items-center">
        <h3 className="text-[37px] z-50 uppercase text-secundary mb-3">Contacto</h3>
        <div className="flex flex-col justify-center items-center w-full  mb-8">
          <p className="text-[20px]">316-666-6666</p>
          <p className="uppercase text-[18px]">CARRERA 14B #118-30, SANTA BARBARA</p>
          <p className="uppercase text-[18px]">KUBIKANDO</p>
        </div>
        <div className="flex flex-col gap-4">
          <span className=" w-full text-center uppercase font-bold">síguenos:</span>
          <ul className="flex gap-6">
            <li className="w-10 h-10">
              <WhatsAppIcon2 />
            </li>
            <li className="w-10 h-10">
              <FacebookIcon />
            </li>
            <li className="w-10 h-10">
              <TwitterIcon />
            </li>
            <li className="w-10 h-10">
              <InstagramIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
