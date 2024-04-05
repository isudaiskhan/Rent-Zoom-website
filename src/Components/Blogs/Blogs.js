import React,{useState,useRef} from 'react'
import image1 from '../Assets/b-1.jpg'
import image2 from '../Assets/b-2.jpg'
import image3 from '../Assets/b-3.jpg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {motion} from 'framer-motion';




const Blogs = () => {
  const sliderRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds (e.g., 3000ms = 3 seconds)
    arrows: false, // Remove default navigation buttons
    pauseOnHover: false, // Pause autoplay on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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

  const [grabCursor, setGrabCursor] = useState(false);

  const handleMouseDown = () => {
    setGrabCursor(true);
  };

  const handleMouseUp = () => {
    setGrabCursor(false);
  };



  return (
    <>

       <div className='w-full max-w-[1240px] mx-auto mt-24 overflow-hidden'>

      <motion.h1
    initial={{x:-100,opacity:0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
      duration:1}} 
       className='md:text-4xl mb-2 text-3xl text-black font-bold ps-8'>Our Latest Blog</motion.h1>

      <motion.p
        initial={{x:100,opacity:0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
      duration:1}} 
       className='mt-4 text-black ps-8 text-lg'>It is a long established fact that a reader will be distracted by the</motion.p>

      <motion.div
      initial={{x:100,opacity:0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
      duration:1}} 
       className='text-end'>
      <button className="ml-4 rounded-full mr-4 shadow-md shadow-gray-500" onClick={goToPrev}>
        <FiChevronLeft className="text-5xl hover:text-[#240a5e]" />
      </button>

      <button className="mr-7 rounded-full shadow-md shadow-gray-500" onClick={goToNext}>
        <FiChevronRight className="text-5xl hover:text-[#240a5e]" />
      </button>
     </motion.div>
     
      <div
      className={`w-full px-4 ${grabCursor ? 'cursor-grab' : ''}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}>
      <Slider {...settings} ref={sliderRef}>      


      {/* Card 1 */}
          <div className='w-full my-4 px-4 relative group shadow-xl'>
          <div className='p-4 text-center shadow-gray-700 shadow-2xl'>
            <h2 className='text-gray-800 text-lg font-medium'>29 March 2024</h2>
          </div>
          <div className='relative'>
          <img src={image1} className='w-full' />    
   </div>

        <div className='py-5 p-5'>
          <h1 className='mt-2 text-2xl font-bold text-gray-900'>Vintage</h1>
          <div className="mt-3 text-gray-800 tracking-wide">      
      It is a long established fact that a reader will be distracted by the readable The point of using Lorem 
     </div>     
     </div>
      </div>





      
      {/* Card 2 */}
      <div className='w-full my-4 px-4 relative group shadow-xl'>
      <div className='p-4 text-center shadow-gray-700 shadow-2xl'>
            <h2 className='text-gray-800 text-lg font-medium'>29 March 2024</h2>
          </div>
          <div className='relative'>
          <img src={image2} className='w-full' />
        
        </div>

        <div className='py-5 p-5'>
          <h1 className='mt-2 text-2xl font-bold text-gray-900'>Steering Wheels</h1>
          <div className="mt-3 text-gray-900 tracking-wide">
      It is a long established fact that a reader will be distracted by the readable The point of using Lorem 
     </div>     
     </div>
      </div>






      {/* Card 3 */}
      <div className='w-full my-4 px-4 relative group shadow-xl'>
      <div className='p-4 text-center shadow-gray-700 shadow-2xl'>
            <h2 className='text-gray-800 text-lg font-medium'>29 March 2024</h2>
          </div>
          <div className='relative'>
          <img src={image3} className='w-full' />
    
        </div>

        <div className='py-5 p-5'>
          <h1 className='mt-2 text-2xl font-bold text-gray-900'>Buick Car</h1>
          <div className="mt-3 text-gray-900 tracking-wide">
          It is a long established fact that a reader will be distracted by the readable The point of using Lorem 
     </div>     
     </div>
      </div>
      </Slider>

        </div>
       </div>      

    </>
  )
}

export default Blogs