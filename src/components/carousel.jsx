import { useState } from 'react'
import carouselData from '../data/carousel.jsx'

function Carousel() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const preSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? carouselData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === carouselData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const currentSlide = carouselData[currentIndex];
  
  return (
    <div id='Home' className="w-full h-screen relative group">
      
      {/* Background Image Container */}
      <div
        style={{ backgroundImage: `url(${currentSlide.image})` }}
        className="w-full h-full bg-center bg-cover duration-500 relative overflow-hidden"
      >
        <div className="absolute inset-0" />

        {/* Centered Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10 select-none">
          
          
          <h2 className="text-[45px] md:text-[36px] font-bold tracking-wide drop-shadow-md mb-2">
            {currentSlide.title1}
          </h2>
          
          <p className="test-[18px] md-[36px] md:text-base max-w-md text-gray-200 drop-shadow-sm">
            {currentSlide.title2}
          </p>
          
          {/* Optional Button */}
          {currentSlide.button && (
            <a 
              href={currentSlide.button.link}
              className="mt-5 px-6 py-4 bg-[#2bb6b6] font-['Courier_New'] font-bold text-white rounded-lg shadow-md transition-all transform hover:scale-105 inline-block"
            >
              {currentSlide.button.text}
            </a>
          )}
        </div>
      </div>

      <button
        onClick={preSlide}
        className="group-hover:block absolute top-[50%] translate-y-[-50%] left-8 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer hover:bg-black/60 transition z-20"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="group-hover:block absolute top-[50%] translate-y-[-50%] right-8 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer hover:bg-black/60 transition z-20"
      >
        ❯
      </button>
    </div>
  );
}

export default Carousel;