import React from 'react'
import Blogs from '../../Blogs/Blogs'
import Footer from '../../Footer/Footer'
import Navbar from '../../Navbar/Navbar'
import ScrollButton from '../../ScrollButton/ScrollButton'

const Blog = () => {
  return (
    <>

    <Navbar />
    
    <div className='mt-48'>
    <Blogs />
    </div>
    
    <div className='mt-36'>
    <Footer />
    </div>

    <ScrollButton />
      
    </>
  )
}

export default Blog