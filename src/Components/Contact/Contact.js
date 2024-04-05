import React from 'react'
import bgimage from '../Assets/contact-bg.jpg';
import { FiMail, FiMessageSquare, FiUser,FiPhoneCall, FiPhone } from "react-icons/fi";
import { FaRegEnvelopeOpen,FaMapLocationDot, FaFacebook, FaLinkedin, FaInstagram  } from "react-icons/fa6";
import {motion} from 'framer-motion';
import { FaTwitter } from 'react-icons/fa';



const Contact = () => {
  return (
    <>

<div
        className="bg-no-repeat bg-cover bg-center mt-40 py-20"
        style={{ backgroundImage: `url(${bgimage})` }}>
    

<div className='py-6 mt-10 overflow-hidden'>
     
     {/* Mobile number And Icons */}
     <div class="lg:flex mx-auto max-w-[1240px] ps-6 pe-6 lg:space-y-0 space-y-12">
     <motion.div
         initial={{x:-100,opacity:0}}
whileInView={{x: 0, opacity: 1}}
transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
duration:1}}
     class="md:w-1/2 lg:w-2/6">
        <div class="flex items-center">
            <div class="mr-4 p-5 rounded-full bg-white cursor-pointer">
            <FiPhoneCall className='text-3xl text-orange-500' />       
            </div>
            <div>
                <a href="#" class="text-xl text-white font-semibold hover:text-orange-400">Hotline</a>
                <p class="text-gray-300">1-677-124-44227 1-688-356-66889</p>
            </div>
        </div>
    </motion.div>


    <motion.div
         initial={{x:100,opacity:0}}
whileInView={{x: 0, opacity: 1}}
transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
duration:1}}
     class="md:w-1/2 lg:w-2/6">
        <div class="flex items-center lg:justify-center">
            <div class="mr-4 p-5 rounded-full bg-white cursor-pointer">
            <FaRegEnvelopeOpen className='text-orange-500 text-3xl' />
                
            </div>
            <div>
                <a href="#" class="text-xl text-white font-semibold hover:text-orange-400">Email</a>
                <p class="text-gray-300">Support@gmail.com</p>
            </div>
        </div>
    </motion.div>



    <motion.div
         initial={{x:100,opacity:0}}
whileInView={{x: 0, opacity: 1}}
transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
duration:1}}
     class="md:w-1/2 lg:w-2/6">
        <div class="flex items-center">
            <div class="mr-4 lg:mx-auto p-5 rounded-full bg-white cursor-pointer">
            <FaMapLocationDot className='text-orange-500 text-3xl' />
                
            </div>
            <div>
                <a href="#" class="text-xl text-white font-semibold hover:text-orange-400">Address</a>
                <p class="text-gray-300">Los Angeles Gournadi, 1230 Bariasl</p>
            </div>
        </div>
    </motion.div>
</div>

</div>



<div className="max-w-[1140px] mx-auto sm:px-28 px-4 py-28">
<div className="grid grid-cols-1">
<h1 className="md:text-4xl text-3xl md:mb-20 text-center font-semibold text-white">Request A call back</h1>



   {/* Form Section */}
    <div className='overflow-hidden p-1'>
    <motion.form
      initial={{x:100,opacity:0}}
whileInView={{x: 0, opacity: 1}}
transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
duration:1}}
    className="space-y-5 lg:mt-0 mt-14">
      {/* Form inputs */}
      <div className="space-y-7">
        
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className='md:w-1/2 relative'>
          <input type="text" id="input1" name="user_name" placeholder='Name' required className="w-full border border-gray-500 px-4 py-3 bg-transparent text-white" />
          <FiUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className='md:w-1/2 relative'>
          <input type="text" id="input2" name="user_phone" placeholder='Phone' required className="w-full border border-gray-500 px-4 py-3 bg-transparent text-white" />
          <FiPhone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      

        <div className='relative'>
          <input type="email" id="input2" name="user_Email" placeholder='Email' required className="w-full border border-gray-500 px-4 py-3 bg-transparent text-white" />
          <FiMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className='relative'>
          <textarea id="textarea" placeholder='Message' name="message" required rows="5" className="p-2 px-4 py-3 w-full border border-gray-500 bg-transparent text-white" />
          <FiMessageSquare className="absolute right-3 bottom-3 text-gray-400" />
        </div>
      </div>

      <div className="flex justify-center">
        <button type="submit" className="font-medium mt-5 flex items-center justify-center px-8 py-3 text-white bg-red-600 border hover:bg-transparent hover:text-red-600 border-red-600">
          SEND MESSAGE
        </button>
      </div>
    </motion.form>
  </div>
  
</div>

</div>
<div className="flex justify-center overflow-hidden">
      <div className="flex flex-wrap justify-around max-w-sm space-x-5">
        <motion.div
         initial={{x:100,opacity:0}}
          whileInView={{x: 0, opacity: 1}}
          transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
          duration:1}}
         className="flex items-center justify-center cursor-pointer w-10 h-10 hover:bg-[#240a5e] rounded-full">
          <FaFacebook className="text-4xl text-gray-400 hover:text-white" />
        </motion.div>

        <motion.div
        initial={{x:-100,opacity:0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
        duration:1}}
         className="flex items-center justify-center cursor-pointer w-10 h-10 rounded-full">
          <FaTwitter className=" text-4xl text-gray-400 hover:text-white" />
        </motion.div>

        <motion.div
        initial={{x:-100,opacity:0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
        duration:1}}
         className="flex items-center justify-center cursor-pointer w-10 h-10 rounded-full">
          <FaLinkedin className="text-4xl text-gray-400 hover:text-white" />
        </motion.div>

        <motion.div
        initial={{x:-100,opacity:0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
        duration:1}}
         className="flex items-center justify-center cursor-pointer w-10 h-10 rounded-full">
          <FaInstagram className="text-4xl text-gray-400 hover:text-white" />
        </motion.div>
      </div>
    </div>
</div>

    </>
  )
}

export default Contact