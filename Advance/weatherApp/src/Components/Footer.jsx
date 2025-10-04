import React, { useContext } from 'react'
import Wind from '../assets/WeatherWind.png'
import Humid from '../assets/weather_humid.png'
import Context from '../Context/CreateContext'

function Footer() {
    const {user_data} = useContext(Context)
    let humid
    let wind
    if(user_data=="City not found"){
        humid = "0 %"
    }
    else{
        humid = `${user_data?.main?.humidity} %`
    }

    if(user_data=="City not found"){
        wind = "0 %"
    }
    else{
        wind = `${Math.round(user_data?.wind?.speed*10)/10} %`
    }
  return (
    <div className="lower-section" id="lower-section">
        <div className="humid-div">
            <div className="humid-img-div">
                <img src={Humid} alt="" className="humid-img" id="humid-img"/>
            </div>
            <div className="humid-txt-div">
                <div className="humid-txt" id="humid-txt">{humid}</div>
                <div className="humidity">Humidity</div>
            </div>
        </div>
        <div className="wind-div">
            <div className = "wind-img-div">
                <img src={Wind} alt="" className="wind-img" id="wind-img"/>
            </div>
            <div className="wind-txt-div">
                <div className="wind-txt" id="wind-txt">{wind}</div>
                <div className="wind_speed">Wind Speed</div>
            </div>
        </div>
    </div>
  )
}

export default Footer