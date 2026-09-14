import {useState} from "react";
import SearchPortfolio from "./SearchPortfolio.jsx";
import PortfolioCard from "./PortfolioCard.jsx";
import {portfolioData} from "../data/portfolio.js";
import AboutPortfolio from "./aboutPortfolio.jsx";

function Portfolio() {

    const [category, setCategory] = useState("All");
    const [zoomImage, setZoomImage] = useState("");
    const [aboutPortfolio, setAboutPortfolio] = useState("")

    const filteredPortfolioData = category === "All"
        ? portfolioData
        : portfolioData.filter((project) => project.category.includes(category));

    const handleZoomImage = (image) => {
        setZoomImage(image)
        console.log("image: "+image)
    }

    const handleAboutPortfolio = (id) => {
        setAboutPortfolio(id)
        console.log("ID: "+id)
    }
    
    
    return (
        <div id='Portfolio' className="w-full p-10 pt-40 bg-gray-200 flex items-center justify-center flex-col">
            <h1 className="text-4xl uppercase font-bold font-['Courier_New']">Our Portfolio</h1>
            <p className=" text-gray-600 font-['Courier_New']">This is Photoshop's version of Lorem Ipsum. Proin gravida</p>

            <section className="w-full max-w-5xl mt-10">
                <div className="m-10 border-t-2 border-b-2 border-gray-300">
                    <SearchPortfolio onCategoryChange={setCategory} />
                </div>
            
                <div className="mx-auto mt-4 columns-1 gap-4 sm:columns-2 lg:columns-4">
                    {filteredPortfolioData.map((project) => (
                        <div key={project.id} className="mb-4 break-inside-avoid">
                            <PortfolioCard
                                id={project.id}
                                image={project.image}
                                title={project.title}
                                text={project.text}
                                onZoom={handleZoomImage}
                                aboutPortfolio={handleAboutPortfolio}
                            />
                        </div>
                    ))}
                </div>
            </section>

            {zoomImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-6"
                    onClick={() => setZoomImage("")}
                    role="presentation"
                >
                    <img
                        src={zoomImage}
                        alt="Expanded portfolio project"
                        className="max-h-[90vh] max-w-[90vw] object-contain"
                        onClick={(event) => event.stopPropagation()}
                    />
                </div>
            )}
            {aboutPortfolio && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-6"
                    onClick={() => setAboutPortfolio("")}
                    role="presentation"
                >
                    <AboutPortfolio id={aboutPortfolio} clickLink={() => setAboutPortfolio("")} />
                </div>
            )}
            
        </div>
    );
}

export default Portfolio;