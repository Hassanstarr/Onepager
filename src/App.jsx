import Carousel from "./components/carousel.jsx"
import Navbar from "./components/Navbar.jsx"
import Portfolio from "./components/Portfolio.jsx"
import Services from "./components/services.jsx"
import Team from './components/team.jsx'
import About from "./components/about.jsx"
import Blog from './components/blog.jsx'
import Contact from './components/contact.jsx'
import Footer from './components/footer.jsx'


function App() {

  return (
    <>
      <Carousel />
      <Navbar />
      <Portfolio />
      <Services />
      <Team />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default App
