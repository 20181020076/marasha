import React from "react";

const Place = () => {
  return (
    <div>
      <div className="flex w-full h-[75px] bg-primary items-center justify-center text-white">
        <h2 className="text-3xl">
          <span style={{"-webkit-text-stroke": "0.4px white"}} className="text-3xl  text-primary">EXCELENTE</span> UBICACION
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
          <div className="w-[85%] ">
            <img src="/1.png" alt="mapa" />
          </div>
          <div className="w-full h-[25px] bg-secundary"></div>
        </div>
      </div>
    </div>
  );
};

export default Place;