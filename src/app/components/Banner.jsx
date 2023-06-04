"use client";
import React, {useEffect , useState} from 'react'
import Carousel from './Carousel'
import { motion, useTransform } from 'framer-motion'
import Image from 'next/image';

const Banner = () => {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollValue(window.scrollY);
      console.log(window.scrollY)
    });
    return ()=> {
      window.removeEventListener('scroll')
    }
  }, []);

  
  return (
    <div className='w-full h-full flex items-end relative mb-7'>
        <motion.div style={{top: `${scrollValue>923? 923*1.3:scrollValue*1.3}px`}} className={` w-[75px] h-[75px] absolute left-2 bg-secundary -z-10`}>
            
        </motion.div>
        <div className='flex w-[85%] h-[90%] bg-primary z-10 overflow-hidden'>
            <Carousel/>
        </div>
        <motion.div style={{top: `${scrollValue*0.7}px`}}  className='flex items-center justify-center bg-primary  w-[15%] h-full  absolute  right-0 overflow-hidden'>
          <img className='w-[85%]' src={"/logo-kubikando.svg"} alt='logo kubikando'/>
        </motion.div>
    </div>
  )
}

export default Banner