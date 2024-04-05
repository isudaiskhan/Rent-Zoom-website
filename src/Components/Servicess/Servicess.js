import React from 'react'
import bgimage from '../Assets/us-bg.jpg'
import { FaPercent , FaCarSide } from 'react-icons/fa';
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaHeadphones } from "react-icons/fa6";
import {motion} from 'framer-motion';




const Servicess = () => {
  return (
    <>
    <div className="relative mt-36 overflow-hidden">

    <div className='text-center'>
    <motion.h1
    initial={{x:-100,opacity:0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
      duration:1}}    
         className='text-4xl text-black font-bold'>Why choose Us</motion.h1>

        <motion.p 
        initial={{x:100,opacity:0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
      duration:1}}    
        className='text-black mt-3 text-lg'>It is a long established fact that a reader will be distracted by the</motion.p>

    </div>

      <div
        className="bg-no-repeat bg-cover bg-center py-24 mt-10"
        style={{ backgroundImage: `url(${bgimage})` }}>


<div className="flex flex-row justify-evenly items-center">
<div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-16 overflow-hidden'>

      {/* Circular Box 1 */}
      <motion.div
      initial={{x:-100,opacity:0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
      duration:1}}    
      
       className="flex flex-col items-center">
      <div className="w-48 h-48 border-4 rounded-full hover:border-none flex items-center justify-center hover:animate-pulse hover:bg-gradient-to-br from-blue-500 to-purple-500">
        <FaPercent className="text-white text-5xl" />
      </div>
      <h1 className="text-center text-white text-xl mt-2">Low Rent</h1>
    </motion.div>

      {/* Circular Box 2 */}
      <motion.div
      initial={{x:100,opacity:0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
      duration:1}}  
       className="flex flex-col items-center">
        <div className="w-48 h-48 border-4 hover:border-none rounded-full flex items-center justify-center hover:animate-pulse hover:bg-gradient-to-br from-blue-500 to-purple-500">
        <FaCarSide   className="text-white text-6xl" />
        </div>
        <h1 className="text-center text-white text-xl mt-2">Fast Car</h1>
      </motion.div>


      {/* Circular Box 3 */}
      <motion.div
      initial={{x:-100,opacity:0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
      duration:1}}  

       className="flex flex-col items-center">
        <div className="w-48 h-48 border-4 hover:border-none rounded-full flex items-center justify-center hover:animate-pulse hover:bg-gradient-to-br from-blue-500 to-purple-500">
        <AiFillSafetyCertificate  className="text-white text-6xl" />
        </div>
        <h1 className="text-center text-white text-xl mt-2">Safe Car</h1>
      </motion.div>


      {/* Circular Box 4 */}
      <motion.div
      initial={{x:100,opacity:0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
      duration:1}}  
      className="flex flex-col items-center">
        <div className="w-48 h-48 border-4 hover:border-none rounded-full flex items-center justify-center hover:animate-pulse hover:bg-gradient-to-br from-blue-500 to-purple-500">
        <FaHeadphones className="text-white text-6xl" />
        </div>
        <h1 className="text-center text-white text-xl mt-2">Quick Support</h1>
      </motion.div>
    </div>


      </div>
      <div className='flex justify-center mt-20 overflow-hidden'>
        <motion.button
         initial={{x:-100,opacity:0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
      duration:1}}  
         class="bg-white md:mt-0 mt-6 border border-transparent hover:bg-transparent hover:border hover:border-white hover:text-white text-black text-lg font-semibold py-2 px-16">
        Read More
      </motion.button>
        </div>

</div>
      
      </div> 

    </>
  )
}

export default Servicess