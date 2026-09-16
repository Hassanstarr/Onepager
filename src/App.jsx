import { useState } from 'react'
import Carousel from "./components/carousel.jsx"
import Navbar from "./components/Navbar.jsx"
import Portfolio from "./components/Portfolio.jsx"
import Services from "./components/services.jsx"
import Team from './components/team.jsx'
import About from "./components/about.jsx"
import Blog from './components/blog.jsx'
import Contact from './components/contact.jsx'
import Footer from './components/footer.jsx'
import Auth from './components/Auth.jsx'


function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  return (
    <>
      <Carousel />
      <Navbar token={token} setAuthModalOpen={setAuthModalOpen} />
      <Portfolio />
      <Services />
      <Team />
      <About />
      <Blog />
      <Contact />
      {isAuthModalOpen && (
        <Auth token={token} setToken={setToken} setAuthModalOpen={setAuthModalOpen} />
      )}
      <Footer />
    </>
  )
}

export default App
