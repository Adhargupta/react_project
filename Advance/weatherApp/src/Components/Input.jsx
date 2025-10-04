import React, { useContext, useState } from 'react'
// import "../pages/style.css";
import logo from "../assets/weather_icon-removebg-preview.png"
import searchIcon from "../assets/weatherSearch-removebg-preview.png"
import Context from '../Context/CreateContext'

function Input() {
    const {user_input,setUser_input,setTrigger} = useContext(Context)
    function handleEnter(e){
        if(e.key==="Enter")[
            setTrigger(true)
        ]
    }
    // console.log(user_input);
  return (
    <div className="top">
      {/* Logo Section */}
      <div className="logo_img_div">
        <img id="logo_img" className="logo_img" src={logo} alt="Weather logo" />
      </div>

      {/* Search Section */}
      <div id="search-div" className="search-div">
        <input
          type="text"
          id="search"
          className="search"
          placeholder="Search city..."
          value={user_input}
          onChange={(e)=>setUser_input(e.target.value)}
          onKeyDown={handleEnter}
        />
        <button onClick={()=>setTrigger(true)} id="search-but" className="search-but">
          <img className="search-img" src={searchIcon} alt="Search" />
        </button>
      </div>
    </div>
  )
}

export default Input