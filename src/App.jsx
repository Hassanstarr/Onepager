import { useState } from 'react'

import Carousel from "./components/carousel.jsx"
import Navbar from "./components/Navbar.jsx"


function App() {

  return (
    <>
      <Carousel />
      <Navbar />
      <div className="w-full h-screen bg-gray-100 flex items-center justify-center">

      </div>
    </>
  )
}

export default App
