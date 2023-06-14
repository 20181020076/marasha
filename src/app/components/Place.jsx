"use client";
import React, { useEffect, useState } from "react";

const Place = () => {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollValue(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScrollValue(window.scrollY);
      });
    };
  }, []);
  return (
    <div className="relative w-full">
      {/* bloque flotante ${scrollValue<1270?0:(scrollValue-1140)*1.2}*/}
      <div
        style={{
          transform: `translate(0px,${
            scrollValue < 1200 ? 0 : Math.pow(scrollValue - 1199, 1.02)
          }px)`,
        }}
        className="w-[100px] h-[100px] bg-secundary absolute -z-10 top-32 right-10"
      ></div>
      {/*  */}
      <div className="flex w-full xs:h-[75px] 2xl:h-[85px] bg-black items-center justify-center text-white">
        <h2 className="xs:text-3xl 2xl:text-6xl">
          <span
            style={{ WebkitTextStroke: "0.4px white" }}
            className=" text-primary"
          >
            EXCELENTE
          </span>{" "}
          UBICACION
        </h2>
      </div>
{/*  */}
      <div className="flex w-full xs:h-[200px] 2xl:h-[400px] relative">
        <div className="w-[65%] flex justify-center items-center ">
          <ul className="list-outside border border-secundary relative overflow-hidden w-[115%] xs:h-[127px] 2xl:h-[400px]  flex flex-col justify-center items-center list-disc text-[10px] ">
            <div className="w-full h-full absolute ">
              <img
                src="/Fondo_place.png"
                alt="place"
                className="h-full w-auto"
              />
            </div>
            <div className="z-20">
              <li>AMPLIAS ZONAS VERDES</li>
              <li>TEATROS</li>
              <li>RESTAURANTES</li>
              <li>CLUBES</li>
              <li>IGLESIAS</li>
              <li>CENTROS COMERCIALES</li>
            </div>
          </ul>
        </div>
        
          
            <div className="border border-secundary flex justify-center bg-white shadow-[0px_5px_7px_0px_rgba(0,0,0,1)]  w-[150px] h-[127px] overflow-hidden rounded-[14px] absolute top-[33px] right-[15px]">
              <img
                src="/1.png"
                alt="mapa"
                className="xs:w-[100px] 2xl:rotate-90 2xl:w-[400px]"
              />
          </div>
        
      </div>
    </div>
  );
};

export default Place;
