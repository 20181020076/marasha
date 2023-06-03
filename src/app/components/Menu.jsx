import React from 'react'
import { motion } from 'framer-motion'

const Menu = () => {
  return (
    <motion.div  exit={{opacity:0}}  className={`flex fixed w-[80%] h-[350px] top-0 pt-[7vh] bg-black justify-center items-center z-20 select-none`}>
        <motion.ul className='h-[100%] text-left flex flex-col gap-4 z-20'>
            <motion.li className='text-white  overflow-hidden uppercase z-30'>Home</motion.li>
            <motion.li className='text-white  overflow-hidden  uppercase z-30'>Disponibles</motion.li>
            <motion.li className='text-white  overflow-hidden  uppercase z-30'>Nosotros</motion.li>
            <motion.li className='text-white overflow-hidden  uppercase z-30'>Otros Proyectos</motion.li>
            <motion.li className='text-white overflow-hidden  uppercase z-30'>Contactenos</motion.li>
        </motion.ul>
    </motion.div>
  )
}

export default Menu