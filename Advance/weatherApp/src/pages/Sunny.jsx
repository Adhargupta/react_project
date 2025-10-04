import React, { useContext, useState } from 'react'
import './style.css';
import Input from '../Components/Input';
import Temperature from '../Components/Temperature';
import Footer from '../Components/Footer';
import Context from '../Context/CreateContext';

function Sunny() {
  return (
    <div className="sunny w-screen h-screen flex justify-center items-center">
        <div className="container">
            <Input/>
            <Temperature/>
            <Footer/>
        </div>
    </div>
  )
}

export default Sunny