import { useState } from "react";
import { aboutPortfolioData } from "../data/portfolio.js";

function AboutPortfolio ({id, clickLink}) {
  const currentSlide = aboutPortfolioData.find((slide) => slide.id === id) ?? aboutPortfolioData[0];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = Array.isArray(currentSlide.image) ? currentSlide.image : [currentSlide.image];

  const preSlide = () => {
    const isFirstImage = currentImageIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastImage = currentImageIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  }

  const currentImage = images[currentImageIndex];
  
  return (
    <div
      className="relative w-135 max-w-3xl overflow-hidden rounded-lg shadow-2xl"
      onClick={(event) => event.stopPropagation()}
      role="dialog"
      aria-modal="true"
      aria-label={`${currentSlide.title} project details`}
    >
      <div className="relative w-135 p-5 bg-white">
        <img
          src={currentImage}
          alt={currentSlide.title}
          className="block max-h-[65vh] w-full object-contain"
        />

        <button
          type="button"
          onClick={preSlide}
          aria-label="Previous project"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-xl text-white transition hover:bg-black/75"
        >
          &#10094;
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next project"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-xl text-white transition hover:bg-black/75"
        >
          &#10095;
        </button>
      </div>

      <div className="px-6 py-5 w-135 text-gray-900 bg-white">
        <h2 className="text-2xl font-bold">{currentSlide.title}</h2>
        <p className="mt-2 text-gray-600">{currentSlide.text}</p>
      </div>

      <div className="px-6 text-center text-sm text-white">
        You can view the project{" "}
        <a
          href="#"
          rel="noreferrer"
          className="font-semibold text-blue-600 underline underline-offset-2 hover:text-blue-800"
          onClick={clickLink}
        >
          here
        </a>
      </div>

    </div>
  );
}

export default AboutPortfolio;