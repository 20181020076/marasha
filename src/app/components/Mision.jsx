import React from "react";
import { Roboto } from "next/font/google";

const robotoTitle = Roboto({
  weight: "500",
  subsets: ["latin"],
});
const robotoText = Roboto({
  weight: "300",
  subsets: ["latin"],
});

const Mision = () => {
  return (
    <div className={`flex flex-col w-full relative z-10 xs:py-10 xs:gap-0 2xl:gap-8 2xl:py-16`}>
      {/* Mision */}
      <div className="flex flex-col  justify-center items-center">
        <div className="flex w-full h-10 items-center justify-center gap-2 relative 2xl:mb-7">
          <div className="border border-secundary xs:w-5 xs:h-5 2xl:w-6 2xl:h-6 2xl:border-2 absolute xs:left-[33%] 2xl:left-[41%]"></div>
          <h3 className={`xs:text-[21px] 2xl:text-[40px] ${robotoTitle.className}`}>Misión</h3>
        </div>

        <p className={`xs:text-[12px] 2xl:text-[19px] xs:w-[282px] 2xl:w-[73%] text-center ${robotoText.className}`} >
          En Kubikandosas, estamos comprometidos con la creación de proyectos
          arquitectónicos únicos y vanguardistas que trasciendan los límites
          convencionales. Nuestra visión es transformar el panorama urbano,
          dotándolo de edificaciones innovadoras que reflejen un estilo de vida
          dinámico y en constante evolución.
        </p>
      </div>
      {/* Vision */}

      <div className="flex flex-col  justify-center items-center">
        <div className="flex w-full h-10 items-center justify-center gap-2 relative 2xl:mb-7">
          <div className="border border-secundary xs:w-5 xs:h-5 2xl:w-6 2xl:h-6 2xl:border-2 absolute xs:left-[33%] 2xl:left-[41%]"></div>
          <h3 className={`xs:text-[21px] 2xl:text-[40px] ${robotoTitle.className}`}>Visión</h3>
        </div>

        <p className= {`xs:text-[12px] 2xl:text-[19px] xs:w-[282px] 2xl:w-[73%] text-center ${robotoText.className}`}>
          En Kubikandosas, estamos comprometidos con la creación de proyectos
          arquitectónicos únicos y vanguardistas que trasciendan los límites
          convencionales. Nuestra visión es transformar el panorama urbano,
          dotándolo de edificaciones innovadoras que reflejen un estilo de vida
          dinámico y en constante evolución.
        </p>
      </div>
    </div>
  );
};

export default Mision;
