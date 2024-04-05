import React,{useRef} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaUser } from "react-icons/fa";
import {motion} from 'framer-motion';



const ClientsSay = () => {

    const sliderRef = useRef();
    const numberOfElements = 5; 


    const productNames = ["Krista Attorn", "Krista Attorn", "Krista Attorn", "Krista Attorn", "Krista Attorn"];
    const prices = ["Web Designer", "Web Designer", "Web Designer", "Web Designer", "Web Designer"];
  
    const settings = {
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true, // Enable autoplay
      autoplaySpeed: 3000, // Set autoplay speed in milliseconds
      arrows: false, // Hide default arrows
      pauseOnHover: false, // Pause autoplay on hover
  
      responsive: [
        {
          breakpoint: 1024,
          settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          },
        },
  
    
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
  
  
      ]
  
    };
  
  
    const goToPrev = () => {
      sliderRef.current.slickPrev();
    };
  
    const goToNext = () => {
      sliderRef.current.slickNext();
    };
  return (
    <>
<div className='mt-36 max-w-[1240px] mx-auto overflow-hidden'>
<div className='text-center'>
        <motion.h1
        initial={{x:-100,opacity:0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
      duration:1}}  
         className='text-4xl text-black font-bold'>What Our Customer say</motion.h1>

        <motion.p
        initial={{x:100,opacity:0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
      duration:1}}  
         className='text-black mt-3 text-lg'>It is a long established fact that a reader will be distracted by the</motion.p>
    </div>

    <motion.div
    initial={{x:100,opacity:0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
      duration:1}}  
     className='text-end sm:mt-0 mt-16'>
      <button className="ml-4 rounded-full mr-4 shadow-md shadow-gray-500" onClick={goToPrev}>
        <FiChevronLeft className="text-5xl hover:text-[#240a5e]" />
      </button>

      <button className="mr-7 rounded-full shadow-md shadow-gray-500" onClick={goToNext}>
        <FiChevronRight className="text-5xl hover:text-[#240a5e]" />
      </button>
     </motion.div>




    <div className='max-w-[1240px] mx-auto relative'>
      <Slider ref={sliderRef} {...settings}>
      {Array.from({ length: numberOfElements }).map((_, index) => (
          <div key={index}>  
          <div className="flex flex-wrap lg:-mx-2 sm:-mx-14 sm:mt-10 mt-8 lg:ps-0 lg:pe-0 sm:ps-10 sm:pe-10">
          <div className=" mx-auto w-11/12 sm:px-4 mb-4">
          <div className="overflow-hidden shadow-lg rounded-md shadow-gray-500 flex">
        
      {/* Price and Description Column */}
    <div className="w-full py-5">
  <p className="text-gray-900 text-lg py-4 sm:w-4/5 ps-3 pe-3 mx-auto">
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.</p>
 
</div>

  </div>
  <div className="mt-8">
      
      <div className="flex justify-center items-center mb-3 sm:mb-0">
  <div className="p-5 bg-gray-200 hover:text-white hover:bg-[#240a5e] text-[#240a5e] rounded-full">
    <FaUser className="text-4xl" />
  </div>
</div>



    <div className="w-full sm:w-auto text-center mt-3">
      <h2 className="text-xl font-semibold text-black">{productNames[index]}</h2>
      <p className="text-black mt-2">{prices[index]}</p>
     
    </div>
  </div>
  </div>
</div>
</div>
        ))}
      </Slider>
    
    </div>

      
</div>


    </>
  )
}

export default ClientsSay