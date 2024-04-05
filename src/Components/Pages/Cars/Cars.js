import React from 'react'
import Navbar from '../../Navbar/Navbar'
import BestCars from '../../BestCars/BestCars'
import ChooseCar from '../../ChooseCar/ChooseCar'
import Footer from '../../Footer/Footer'
import ScrollButton from '../../ScrollButton/ScrollButton'

const Cars = () => {
  return (
    <>

      <Navbar />

      <div className='mt-52'>
      <ChooseCar />
      </div>

      <div className='mt-36'>
      <BestCars />
      </div>
      
      <Footer />
      <ScrollButton />
      
    </>
  )
}

export default Cars
