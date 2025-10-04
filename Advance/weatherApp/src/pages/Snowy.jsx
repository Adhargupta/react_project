import React, { useContext, useState } from 'react'
import './style.css';
import Input from '../Components/Input';
import Temperature from '../Components/Temperature';
import Footer from '../Components/Footer';
import Context from '../Context/CreateContext';

function Snowy() {
  return (
    <div className="center snowy w-screen h-screen">
        <div className="container">
            <Input/>
            <Temperature/>
            <Footer/>
        </div>
    </div>
  )
}

export default Snowy