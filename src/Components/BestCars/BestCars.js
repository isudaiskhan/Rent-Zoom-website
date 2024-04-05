import React from 'react'
import image1 from '../Assets/r-1.png'
import image2 from '../Assets/r-2.png'
import image3 from '../Assets/r-3.png'
import image4 from '../Assets/r-4.png'
import image5 from '../Assets/r-5.png'
import image6 from '../Assets/r-6.png'
import {motion} from 'framer-motion';



const BestCars = () => {
  return (
    <>

    <div className='flex flex-col md:flex-row items-center overflow-hidden justify-between ps-10 pe-10 py-8 shadow-2xl shadow-gray-800'>
        <motion.div
    initial={{x:-100,opacity:0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
      duration:1}} 
        >
            <h1 className='text-4xl text-black font-bold'>Our Best Cars</h1>
            <p className='text-black mt-3 text-lg'>It is a long established fact that a reader will be distracted .</p>
        </motion.div>
        <div>

        <motion.button
      
    initial={{x:100,opacity:0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
      duration:1}} 
         class="bg-[#f22324] md:mt-0 mt-6 border border-transparent hover:bg-white hover:border hover:border-[#f22324] hover:text-[#f22324] text-white font-semibold py-2 px-12">
                Book Now
                </motion.button>
        </div>
    </div>

<div className='bg-[#240a5e] py-16'>

<div class="mx-auto sm:p-10 overflow-hidden">

         {/* First box */}
        <div class="grid lg:grid-cols-3 sm:grid-cols-2 sm:ps-0 sm:pe-0 ps-6 pe-6 gap-8 max-w-[1240px] mx-auto">
            <motion.div
    initial={{x:-100,opacity:0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
      duration:1}} 
             class="bg-white p-10 shadow rounded-md flex flex-col items-center justify-center relative">
                <img src={image1} alt="Placeholder Image" class="rounded mb-8" />
                <button class="bg-[#f22324] absolute bottom-0 border border-transparent hover:bg-white hover:border hover:border-[#f22324] hover:text-[#f22324] text-white font-semibold py-2 px-8">
                Rent $200
                </button>
            </motion.div>


             {/* second box */}
            <motion.div
    initial={{x:-100,opacity:0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
      duration:1}} 
             class="bg-white p-10 shadow rounded-md flex flex-col items-center justify-center relative">
                <img src={image2} alt="Placeholder Image" class="rounded mb-8" />
                <button class="bg-[#f22324] absolute bottom-0 border border-transparent hover:bg-white hover:border hover:border-[#f22324] hover:text-[#f22324] text-white font-semibold py-2 px-8">
                Rent $200
                </button>
            </motion.div>


             {/* Third box */}
             <motion.div
    initial={{x:100,opacity:0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
      duration:1}} 
             class="bg-white p-10 shadow rounded-md flex flex-col items-center justify-center relative">
                <img src={image3} alt="Placeholder Image" class="rounded mb-8" />
                <button class="bg-[#f22324] absolute bottom-0 border border-transparent hover:bg-white hover:border hover:border-[#f22324] hover:text-[#f22324] text-white font-semibold py-2 px-8">
                Rent $200
                </button>
            </motion.div>


             {/* Fourth box */}
             <motion.div
    initial={{x:-100,opacity:0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
      duration:1}} 
             class="bg-white p-10 shadow rounded-md flex flex-col items-center justify-center relative">
                <img src={image4} alt="Placeholder Image" class="rounded mb-12" />
                <button class="bg-[#f22324] absolute bottom-0 border border-transparent hover:bg-white hover:border hover:border-[#f22324] hover:text-[#f22324] text-white font-semibold py-2 px-8">
                Rent $200
                </button>
            </motion.div>


            {/* Fifth box */}
            <motion.div
    initial={{x:-100,opacity:0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
      duration:1}} 
             class="bg-white p-10 shadow rounded-md flex flex-col items-center justify-center relative">
                <img src={image5} alt="Placeholder Image" class="rounded mb-12" />
                <button class="bg-[#f22324] absolute bottom-0 border border-transparent hover:bg-white hover:border hover:border-[#f22324] hover:text-[#f22324] text-white font-semibold py-2 px-8">
                Rent $200
                </button>
            </motion.div>


             {/* Sixth box */}
             <motion.div
    initial={{x:100,opacity:0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
      duration:1}} 
             class="bg-white p-10 shadow rounded-md flex flex-col items-center justify-center relative">
                <img src={image6} alt="Placeholder Image" class="rounded mb-12" />
                <button class="bg-[#f22324] absolute bottom-0 border border-transparent hover:bg-white hover:border hover:border-[#f22324] hover:text-[#f22324] text-white font-semibold py-2 px-8">
                Rent $200
                </button>
            </motion.div>
        </div>

        <div className='flex justify-center mt-14 overflow-hidden'>
        <motion.button
    initial={{x:100,opacity:0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
      duration:1}} 
         class="bg-white md:mt-0 mt-6 border border-transparent hover:bg-transparent hover:border hover:border-white hover:text-white text-black text-lg font-semibold py-2 px-14">
        See More
                </motion.button>
        </div>


    </div>
</div>
      
    </>
  )
}

export default BestCars