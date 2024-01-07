import React from 'react'
import './style.css';
import Herosection from './features/herosection'
import Ourservices from './features/ourservices'
import Client from './features/client';
const HomePage = () => {
  return (
    <div>
      <Herosection/>
      <Ourservices/>
      <Client/>
      
      
      
    </div>
  )
}

export default HomePage
