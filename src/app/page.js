import Navbar from "./components/Navbar";

import Banner from "./components/Banner";
import AnimateLay from "./components/AnimateLay";
import Place from "./components/Place";
import Whatsapp from "./components/Whatsapp";

import { Roboto } from "next/font/google";
import Contact from "./components/Contact";
import Mision from "./components/Mision";
const robotoTitle = Roboto({
  weight: "500",
  subsets: ["latin"],
});
const robotoText = Roboto({
  weight: "300",
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <div id="home" className="w-full h-[227px] border border-black 2xl:h-[600px] xs:h-[227px]">
        <Banner />
      </div>
      <div id="nosotros" className="flex flex-col justify-center items-center w-full text-center mt-3 z-40 xs:py-2 2xl:py-8">
        <div className="xs:w-[282px] 2xl:w-[73%]">
        <h2  className={`uppercase font-bold ${robotoTitle.className} z-40 xs:text-[21px] 2xl:text-[35px] `}> nosotros</h2>
        <p className={`z-40 xs:text-[12px] 2xl:text-[16px] ${robotoText.className}`}>
          Kubikando sas es una empresa con 19 años de trayectoria que esta en
          constante busqueda de la perfección. Desarrollando proyectos de alto
          valor que son la personificación de la elegancia y la distinción. Nos
          apasiona crear espacios que trasciendan lo ordinario, fusionando lo
          humano y lo natural con un toque de clase y estilo.
        </p>
        </div>
        
      </div>

      <div id="disponibles" className="flex justify-center items-center w-full ">
        <AnimateLay />
      </div>
      <div id="descripcion" className="flex justify-center items-center w-full ">
        <Place />
      </div>
      <div className="flex w-full justify-center items-center border border-black">
        <Mision/>
      </div>
      <div id="contacto" className="w-full ">
        <Contact/>
      </div>
      

      <Whatsapp/>
    </div>
  );
}
