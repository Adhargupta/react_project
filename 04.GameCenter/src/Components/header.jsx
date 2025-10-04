import React from 'react'
import logo from '../assets/logo.png'

function Header() {
  return (
    <div className='w-[100%] flex justify-around'>

        <div className="logo flex items-center pt-[30px]">
            <img className='logo-img w-[110px] pt-2' src={logo} alt="" />
        </div>

        <div className="navBar flex items-center">
            <ul>
                <li>Home</li>
                <li>Product</li>
                <li>Contact Us</li>
                <li>About</li>
            </ul>
        </div>

        <div className="btn-div flex items-center">
            <button>SugnUp</button>
        </div>
    </div>
  )
}

export default Header