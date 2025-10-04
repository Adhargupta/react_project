import React, { useContext, useState } from 'react'
import Context from '../Context/CreateContext'

function Temperature() {
    const {user_data,user_input,trigger} = useContext(Context)
    let temp;
    let feelTemp;
    let city

    if(user_data=="City not found"){
        temp = "City not found"
        feelTemp = ""
        city = user_input
    }
    else{
        temp = `${Math.round(user_data?.main?.temp)}°C`
        feelTemp = `Feels like : ${Math.round(user_data?.main?.feels_like)}°C`
        city = `${user_data?.name}`
    }

  return (
    <div className='temperature'>
        {temp != undefined? `${temp}`: "Loading..."}
        <div className="text-[20px]">
            {feelTemp}
        </div>
        <div className="text-[20px]">
            {city}
        </div>
    </div>
  )
}

export default Temperature

