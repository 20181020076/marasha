"use client";
import React, {useEffect, useState} from "react";

const Place = () => {
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
    <div className="relative w-full">
      {/* bloque flotante ${scrollValue<1270?0:(scrollValue-1140)*1.2}*/}
      <div style={{transform:`translate(0px,${scrollValue<1200?0:(Math.pow(scrollValue-1199,1.02))}px)`}} className="w-[100px] h-[100px] bg-secundary absolute -z-10 top-32 right-10">

      </div>
      {/*  */}
      <div className="flex w-full h-[75px] bg-primary items-center justify-center text-white">
        <h2 className="text-3xl">
          <span
            style={{ "WebkitTextStroke": "0.4px white" }}
            className="text-3xl  text-primary"
          >
            EXCELENTE
          </span>{" "}
          UBICACION
        </h2>
      </div>
      <div className="w-full h-[25px]">
        <div className="w-1/2 h-full bg-secundary"></div>
      </div>
      <div className="flex w-full">
        <div className="w-1/2">
          <ul className="list-disc list-inside text-sm ml-3">
            <li>AMPLIAS ZONAS VERDES</li>
            <li>TEATROS</li>
            <li>RESTAURANTES</li>
            <li>CLUBES</li>
            <li>IGLESIAS</li>
            <li>CENTROS COMERCIALES</li>
          </ul>
        </div>
        <div className="w-1/2 ">
          <div className="w-[100%] overflow-hidden">
            <img src="/1.png" alt="mapa"  className="xs:max-w-[200px] xs:w-[170px] 2xl:rotate-90 2xl:w-[400px]"/>
          </div>
          <div className="w-full h-[25px] bg-secundary"></div>
        </div>
      </div>
    </div>
  );
};

export default Place;
