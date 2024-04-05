import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { NavLink, useLocation } from 'react-router-dom';
import {motion} from 'framer-motion';



const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation(); // Use useLocation instead of useHistory

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when location changes
    setMobileMenu(false);
    // Scroll to the top of the page when navigating to a new location
    window.scrollTo(0, 0);
  }, [location]);

  const navItems = [
    { id: 'home', label: 'HOME', link: '/' },
    { id: 'about', label: 'ABOUT', link: '/about' },
    { id: 'cars', label: 'CARS', link: '/cars' },
    { id: 'blogs', label: 'BLOGS', link: '/blogs' },
    { id: 'contact', label: 'CONTACT US', link: '/contact' },
    { id: 'login', label: 'LOGIN', link: '/login' },

  ];

  const triggerMobileNavItem = (target) => {
    setMobileMenu(false);
    const targetElement = document.querySelector(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  const toggleMobileMenu = () => {
         setMobileMenu(!mobileMenu);
       };




  return (
    <>
     <nav className={`fixed top-0 w-full z-50 transition duration-300 ${hasScrolled ? 'bg-[#ffffff]' : ''} ${hasScrolled && window.scrollY > 10 ? 'top-0 shadow-xl' : ''}`}>
      <div className="relative max-w-[1240px] mx-auto sm:ps-9 sm:pe-9 ps-5 pe-5 xl:ps-0 xl:pe-0">
        <div className="py-4 mx-auto flex items-center justify-between">
          <div>
            <NavLink to="/">
              <h2 className='text-3xl font-bold text-[#240a5e]'>Rent4u</h2>
            </NavLink>
          </div>

          <NavLink to="/login" className="ml-auto me-8 -mt-1 hidden sm:block ">
              <h2 className='text-lg text-red-500 font-semibold'>Login</h2>
            </NavLink>
         

          <div className='bg-white rounded-md px-1'>
              <button onClick={toggleMobileMenu}>
                {mobileMenu ? (
                  <IoMdMenu className="text-5xl text-[#240a5e] pt-1" />
                ) : (
                  <IoMdMenu className="text-5xl text-[#240a5e] pt-1" />
                )}
              </button>
            </div>
        </div>
      </div>
      </nav>

    
        {mobileMenu && (
        <motion.div
              initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
         className="fixed inset-0 z-50 min-h-screen bg-black bg-opacity-70">
          <div className="absolute right-0 min-h-screen text-center py-4 px-8 shadow w-full bg-[#100028] z-50">
            <button className="absolute top-0 right-0 mt-4 mr-4" onClick={toggleMobileMenu}>
              <AiOutlineClose className="text-5xl text-white hover:text-gray-300" />
            </button>
            <ul className="mt-24 flex flex-col space-y-5 text-lg">
              {navItems.map((item) => (
                <li key={item.id} className="py-2">
                  <NavLink
                    to={item.link}
                    className="cursor-pointer pt-0.5  uppercase text-white"
                    activeClassName="font-semibold"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

    )} 

    </>
  );
};

const MobileNavItem = ({ children, onClick }) => {
  return (
    <li className="py-2">
      <span onClick={onClick} className="cursor-pointer pt-0.5  uppercase text-white">
        {children}
      </span>
    </li>
  );
};

export default Navbar;