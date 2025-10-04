import React, { useCallback, useEffect, useState } from 'react'
import Context from './CreateContext'

function ProvideContext({children}) {
    const [state, setState] = useState("Sunny")
    const [user_data, setUser_data] = useState({})
    const [user_input, setUser_input] = useState("")
    const [trigger, setTrigger] = useState(false)

    async function API(city){
      // https://api.openweathermap.org/data/2.5/weather?&appid=fd046449063607beb1dec880c510b4fb&units=metric&q=varanasi
        const x = await fetch(`https://api.openweathermap.org/data/2.5/weather?&appid=${import.meta.env.VITE_APP_ID}&units=metric&q=${city}`)
        const data = await x.json();
        // console.log(data);
        if(data.cod == "404"){
            setUser_data("City not found")
        }
        else{
            setUser_data(data)
        }
      }
    useEffect(()=>{
        API('Varanasi')
    },[])
    
    useEffect(()=>{
        const city = user_input.trim()
        city===""?API("Varanasi"):API(city)
        setTrigger(false); // reset trigger
        console.log(city);
    },[trigger])

    useEffect(() => {
        if (!user_data || !user_data.main) return;
      
        const temp = Math.round(user_data.main.temp);
        const humid = user_data.main.humidity;
        const wind_speed = Math.round(user_data.wind.speed * 10) / 10;
        const condition = user_data.weather?.[0]?.main;
      
        if (temp <= 2 && humid >= 50) {
          setState("Snowy");
        } else if ((condition === "Rain" || condition === "Drizzle" || humid >= 80) && temp > 2) {
          setState("Rainy");
        } else if (condition === "Clouds" || wind_speed >= 8 || (humid >= 60 && humid < 80)) {
          setState("Cloudy");
        } else if (temp > 2 && humid < 60 && wind_speed < 8) {
          setState("Sunny");
        } else {
          setState("Sunny"); // fallback
        }
      }, [user_data]);

  return (
    <Context.Provider value={{user_data, setUser_data,user_input,setUser_input,setTrigger,state}}>
        {children}
    </Context.Provider>
  )
}

export default ProvideContext