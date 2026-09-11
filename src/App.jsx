import { useState } from 'react'

import Carousel from "./components/carousel.jsx"
import Navbar from "./components/Navbar.jsx"
import Portfolio from "./components/Portfolio.jsx"


function App() {

  return (
    <>
      <Carousel />
      <Navbar />
      <Portfolio />
      <div className="w-full h-screen bg-gray-100 flex items-center justify-center">

      </div>
    </>
  )
}

export default App
