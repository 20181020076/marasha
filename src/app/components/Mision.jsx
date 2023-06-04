import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});

const Mision = () => {
  return (
    <div className={`flex flex-col w-full relative z-0 py-10`}>
      {/* Mision */}
      <div className="flex flex-col  justify-center items-center">
        <div className="flex w-full h-10 items-center justify-center gap-2 relative">
          <div className="border border-secundary w-5 h-5 absolute left-[33%]"></div>
          <h3 className={`text-[21px] ${roboto.className}`}>Misión</h3>
        </div>

        <p className="text-[12px] w-[282px] text-center">
          En Kubikandosas, estamos comprometidos con la creación de proyectos
          arquitectónicos únicos y vanguardistas que trasciendan los límites
          convencionales. Nuestra visión es transformar el panorama urbano,
          dotándolo de edificaciones innovadoras que reflejen un estilo de vida
          dinámico y en constante evolución.
        </p>
      </div>
      {/* Vision */}

      <div className="flex flex-col  justify-center items-center">
        <div className="flex w-full h-10 items-center justify-center gap-2 relative">
          <div className="border border-secundary w-5 h-5 absolute left-[33%]"></div>
          <h3 className={`text-[21px] ${roboto.className}`}>Visión</h3>
        </div>

        <p className="text-[12px] w-[282px] text-center">
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
