"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { Roboto } from 'next/font/google';

const roboto =  Roboto({
  weight:"900",
  subsets: ["latin"]
})

const Card = ({side,selectedId,setSelectedId, apto, layoutId,index}) => {
  
  return (
    <motion.div className='flex w-[320px] relative justify-center rounded-[14px]' >
        <motion.div className={`flex ${side==="right"?"flex-row-reverse":""} w-full  bg-purple-50 z-10  rounded-[14px] shadow-[0px_5px_7px_0px_rgba(0,0,0,1)]`} layoutId={layoutId} onClick={() => setSelectedId(apto.id)}>
          <motion.div className={`w-[212px] h-[171px] bg-yellow-300 ${side==="left"? "rounded-tl-[14px] rounded-bl-[14px]": "rounded-tr-[14px] rounded-br-[14px]"} overflow-hidden`}>
            <img className='h-full' src='/apartamento.png'/>
          </motion.div>
          <motion.div className='w-[108px] flex flex-col justify-center items-center rounded-[14px]'>
            <motion.div className=''>
              <span className='uppercase text-[10px]'>apartamento</span>
              <h3 className={`uppercase text-center font-bold ${roboto.className} tracking-[0.1em]`}>Tipo 6</h3>
            </motion.div>
            <motion.button className=' w-[60px] rounded-full border border-black text-[10px] px-2' onClick={() => setSelectedId(apto.id)}>ver mas</motion.button>
          </motion.div>

        </motion.div>

        {/* animate={{y:[0,5,0]}} transition={{delay:index*Math.random(),duration: 2,repeat:Infinity}} */}
        <motion.div   className={`w-[133px] h-[150px] -bottom-4 rounded-[14px] absolute ${side==="left"?"-left-4   bg-primary ":"-right-3 bg-secundary "} `}>
            
        </motion.div>
    </motion.div>
  )
}

export default Card