import React from 'react'
import image from '../Assets/about-img.png'
import {motion} from 'framer-motion';



const About = () => {
  return (
    <>

<div className='w-full bg-white py-20'>
  <div className='mt-24 flex md:flex-row flex-col items-center overflow-hidden'>
    <motion.img
    initial={{x:-100,opacity:0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
      duration:1}}
     src={image} className='sm:w-3/5 w-full my-4 md:mr-8' />

    <motion.div
    initial={{x:100,opacity:0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
      duration:1}}
     className='flex flex-col sm:w-1/4 justify-center md:ms-10'>
      <h1 className='lg:text-4xl text-3xl text-center text-[#12141D] font-bold py-4'>About Our Cars</h1>
      <p className='text-center mt-3 text-lg text-[#0c0c0c]'>
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem .</p>

    <button
      className="text-lg tracking-wider border mx-auto bg-[#f22324] hover:text-[#f22324] text-white hover:border hover:border-[#f22324] hover:bg-white  mt-9 py-2 px-4 w-40">
      Read More
    </button>


      </motion.div>
  </div>
</div>
      
    </>
  )
}

export default About