import React from 'react'
import {motion} from 'framer-motion';


const Map = () => {
  return (
    <>

  {/* Map */}
   <div className='overflow-hidden'>
   <motion.div
      initial={{x:-100,opacity:0}}
    whileInView={{x: 0, opacity: 1}}
    transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
    duration:1}}
     className="relative h-full" style={{ paddingBottom: "36.25%" }}>
      <iframe
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991441025264!2d2.2919063756738653!3d48.8583736007088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2s!4v1711816803088!5m2!1sen!2s"        
        height="100%"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute top-0 left-0 w-full"
      ></iframe>
    </motion.div>
  </div>
      

    </>
  )
}

export default Map