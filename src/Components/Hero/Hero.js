import React, { useRef } from 'react';
import bgimage from '../Assets/hero-img.jpg';
import {motion} from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../Assets/book-car.png'
import { FaLongArrowAltLeft,FaLongArrowAltRight } from "react-icons/fa";



const Hero = () => {


  const sliderRef = useRef();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds (e.g., 3000ms = 3 seconds)
    arrows: false, // Remove default navigation buttons
    pauseOnHover: false, // Pause autoplay on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  }
  
  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };


  return (
    <>
    <div className="relative">
      <div
        className="bg-no-repeat h-full bg-auto"
        style={{ backgroundImage: `url(${bgimage})` }} >

     <div className='pt-[700px] lg:pt-0'>
      <div
      className={`w-full bg-[#240a5e] pt-24 lg:w-[30%] lg:mt-0 lg:ml-auto py-36 px-4 lg:ps-0 lg:pe-0 sm:ps-28 sm:pe-28 `}>

     <div className='text-start'>
      <button className="bg-[#240a5e] p-3 sm:-ml-6" onClick={goToPrev}>
        <FaLongArrowAltLeft className="text-3xl text-white" />
      </button>
      </div>

      <Slider {...settings} ref={sliderRef}>      


      {/* Card 1 */}
          <div className='w-full my-4 relative group'>
          <div className='py-5 ps-10'>
          <h1 className='mt-2 sm:text-6xl text-4xl font-bold text-white' style={{lineHeight:"4.5rem"}}>RENT CAR EXPERTS SERVICE</h1>
       </div>
      <div className='ps-11'>
        <button type="submit" className="font-medium mt-5 flex items-center justify-center px-7 sm:px-12 py-3 text-white bg-red-600 border hover:bg-transparent hover:text-red-600 border-red-600">
        CONTACT US
        </button>
      </div>
      </div>


      
      {/* Card 2 */}
      <div className='w-full my-4 relative group'>  
        <div className='py-5 ps-10'>
          <h1 className='mt-2 sm:text-6xl text-4xl font-bold text-white' style={{lineHeight:"4.5rem"}}>RENT CAR EXPERTS SERVICE</h1>
        </div>
        <div className='ps-11'>
        <button type="submit" className="font-medium mt-5 flex items-center justify-center px-7 sm:px-12 py-3 text-white bg-red-600 border hover:bg-transparent hover:text-red-600 border-red-600">
        CONTACT US
        </button>
      </div>
      </div>




      {/* Card 3 */}
      <div className='w-full my-4 relative group'>    
        <div className='py-5 ps-10'>
        <h1 className='mt-2 sm:text-6xl text-4xl font-bold text-white' style={{lineHeight:"4.5rem"}}>RENT CAR EXPERTS SERVICE</h1>
         
        </div>
        <div className='ps-11'>
        <button type="submit" className="font-medium mt-5 flex items-center justify-center px-7 sm:px-12 py-3 text-white bg-red-600 border hover:bg-transparent hover:text-red-600 border-red-600">
        CONTACT US
        </button>
      </div>
      </div>
      
      </Slider>

      <div className='text-start mt-5'>
      <button className="bg-[#240a5e] p-3 sm:-ml-6" onClick={goToNext}>
        <FaLongArrowAltRight className="text-3xl text-white" />
      </button>
      </div>

      </div>
        </div>

      <div className='lg:w-2/6 md:w-1/6 w-4/6 lg:ps-7 ml-auto -mt-10 me-2'>
        <img src={image1} className='w-96' />
      </div>  
      </div>
    


  <div className='md:-mt-28'>
  <motion.div
         initial={{x:-100,opacity:0}}
whileInView={{x: 0, opacity: 1}}
transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
duration:1}}
  class="bg-white p-8 rounded-lg shadow-lg shadow-gray-500 md:max-w-2xl w-full">
    <form>
      <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label class="text-gray-600 text-lg" for="input1">Pick Up Locaion</label>
          <input id="input1" type="text" class="w-full mt-1 border placeholder:text-gray-700 border-gray-300 px-4 py-2 focus:outline-none focus:border-[#240a5e]" placeholder="Pick Up Location" />
        </div>
        <div>
          <label class="text-gray-600 text-lg" for="input2">Drop Location</label>
          <input id="input2" type="text" class="w-full mt-1 border border-gray-300 placeholder:text-gray-700 px-4 py-2 focus:outline-none focus:border-[#240a5e]" placeholder="Drop Location" />
        </div>
        <div>
          <label class="text-gray-600 text-lg" for="input3">Pick Up Date</label>
          <input id="input3" type="date" class="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none focus:border-[#240a5e]" placeholder="Pick Up Date" />
        </div>
        <div>
          <label class="text-gray-600 text-lg" for="input4">Return Date</label>
          <input id="input4" type="date" class="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none focus:border-[#240a5e]" placeholder="Return Date" />
        </div>
      </div>

      <div className='flex justify-center'> 
        <button type="button" class="bg-[#240a5e] text-white px-16 py-2 text-lg hover:bg-white border hover:text-[#240a5e] hover:border-[#240a5e] focus:outline-none mt-4">Search</button>
      </div>

    </form>
    </motion.div>
   </div>


     </div>
    </>
  );
};

export default Hero;