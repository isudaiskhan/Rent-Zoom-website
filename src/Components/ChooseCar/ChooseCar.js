import React from 'react'
import image1 from '../Assets/c-1.png'
import image2 from '../Assets/c-2.png'
import image3 from '../Assets/c-3.png'
import {motion} from 'framer-motion';



const ChooseCar = () => {
  return (
    <>
    <div className='mt-44 sm:ms-20 overflow-hidden'>
    <motion.h1
     initial={{x:-100,opacity:0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
      duration:1}}
     className='md:text-4xl mb-2 text-3xl text-black font-bold ps-8'>Better Way For Find Your Favourite Cars</motion.h1>
      <motion.p 
       initial={{x:100,opacity:0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
        duration:1}}
      className='mt-4 text-black ps-8 text-lg'>It is a long established fact that a reader will be distracted by the readable</motion.p>
      </div>

<div className="grid lg:grid-cols-3 sm:grid-cols-2 justify-around ps-3 pe-3 overflow-hidden">
      <motion.div
       initial={{x:-100,opacity:0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
      duration:1}}
       className="flex flex-col p-12 bg-gray-100 rounded-full items-center justify-center mt-14">
       
       
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mt-5">
          <img src={image1} />
        </div>
        </div>
        <h1 className="mt-4 text-2xl font-bold text-center">Choose Your Car</h1>
        <p className="mt-2 text-center text-black text-lg">
        It is a long established fact that a reader will be distracted by the readable content of a page when
        </p>
        <button className="mt-8 px-7 py-2 text-lg bg-[#f22324] border border-[#f22324] hover:text-[#f22324] hover:bg-transparent text-white focus:outline-none">Read More</button>
      </motion.div>



      
      <motion.div
       initial={{x:-100,opacity:0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
      duration:1}}
       className="flex flex-col p-16 bg-gray-100 rounded-full items-center justify-center mt-14">
        <div className="flex items-center justify-center mt-5">
        <img src={image2} />
        </div>
        <h1 className="mt-4 text-2xl font-bold text-center">Get Your Car</h1>
        <p className="mt-2 text-center text-black text-lg">
        It is a long established fact that a reader will be distracted by the readable content of a page when
        </p>
        <button className="mt-8 px-7 py-2 text-lg bg-[#f22324] border border-[#f22324] hover:text-[#f22324] hover:bg-transparent text-white focus:outline-none">Read More</button>
      </motion.div>



      <motion.div
       initial={{x:100,opacity:0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
      duration:1}}
       className="flex flex-col p-16 bg-gray-100 rounded-full items-center justify-center mt-14">
        <div className="flex items-center justify-center mt-5">
        <img src={image3} />
        </div>
        <h1 className="mt-4  text-2xl font-bold text-center">Contact Your Dealer</h1>
        <p className="mt-2 text-center text-black  text-lg">
        It is a long established fact that a reader will be distracted by the readable content of a page when
        </p>
        <button className="mt-8 px-7 py-2 text-lg bg-[#f22324] border border-[#f22324] hover:text-[#f22324] hover:bg-transparent text-white focus:outline-none">Read More</button>
      </motion.div>
    </div>
    </>


  )
}

export default ChooseCar