import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Cars from './Components/Pages/Cars/Cars';
import Login from './Components/Pages/Login/Login';
import AboutCar from './Components/Pages/AboutCar/AboutCar';
import Blog from './Components/Pages/Blog/Blog';
import Form from './Components/Pages/Form/Form';


function App() {
  return (
    <>

    <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<AboutCar/>} />
            <Route path="/cars" element={<Cars/>} />
            <Route path="/blogs" element={<Blog/>} />
            <Route path="/contact" element={<Form/>} />
            <Route path="/login" element={<Login/>} />

    </Routes>

    </>
  );
}

export default App;