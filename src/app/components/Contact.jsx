import React from "react";
import {
  FacebookIcon,
  WhatsAppIcon2,
  InstagramIcon,
  TwitterIcon,
} from "./Icons";

const Contact = () => {
  return (
    <div className="h-[50vh] w-full relative z-0">
      <div className="flex justify-center items-center w-full  overflow-hidden">
        <img src="/Fondo_Contacto.png" alt="" className="w-full h-full" />
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
