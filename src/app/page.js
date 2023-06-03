import Navbar from "./components/Navbar";

import Banner from "./components/Banner";
import AnimateLay from "./components/AnimateLay";
import Place from "./components/Place";
import Whatsapp from "./components/Whatsapp";
import { Custom } from "./components/Icons";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "700",
  subsets: ["latin"]
})

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full h-[227px] border border-black ">
        <Banner />
      </div>
      <div className="flex flex-col justify-center items-center w-full text-center mt-3">
        <div className="w-[282px] ">
        <h2  className={`uppercase bold ${roboto.className} text-[21px]`}> nosotros</h2>
        <p className={`text-[12px]`}>
          Kubikando sas es una empresa con 19 años de trayectoria que esta en
          constante busqueda de la perfección. Desarrollando proyectos de alto
          valor que son la personificación de la elegancia y la distinción. Nos
          apasiona crear espacios que trasciendan lo ordinario, fusionando lo
          humano y lo natural con un toque de clase y estilo.
        </p>
        </div>
        
      </div>

      <div className=" w-full ">
        <AnimateLay />
      </div>
      <div className=" w-full ">
        <Place />
      </div>
      <div className="w-full h-[200px] border border-black">
        <Custom />
      </div>

      <Whatsapp />
    </div>
  );
}
