import { useContext, useEffect, useState } from 'react'
import Cloudy from './pages/cloudy'
import Sunny from './pages/sunny'
import Snowy from './pages/Snowy'
import Rainy from './pages/Rainy'
import ProvideContext from './Context/ProvideContext'
import Context from './Context/CreateContext'


function AppContent() {
  const { state } = useContext(Context);
  
    switch (state) {
      case "Sunny":
        return <Sunny />;
      case "Cloudy":
        return <Cloudy />;
      case "Snowy":
        return <Snowy />;
      case "Rainy":
        return <Rainy />;
      default:
        return <Sunny />; // fallback
    }
}

function App() {

  return (
    <ProvideContext>
      <AppContent/>
    </ProvideContext>
  )
}

export default App
