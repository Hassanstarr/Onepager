import { IoIosSearch } from "react-icons/io";
import { LuNewspaper } from "react-icons/lu";

function PortfolioCard({ id, image, title, text, onZoom, aboutPortfolio }) {
    return (
        <div className="group relative self-start overflow-hidden shadow-md">
            <img src={image} alt={title} className="block h-auto w-full" />
            <div
                className="absolute inset-0 flex flex-col items-center justify-center bg-[rgba(43,182,182,0.9)] p-4 pb-16 text-center text-white opacity-0 transition-opacity duration-300 active:opacity-100 group-hover:opacity-100">
                <div>
                    <h3 className="text-[20px] font-['Courier_New'] font-bold">{title}</h3>
                    <p className="text-[13px] font-['Courier_New'] font-bold">{text}</p>
                </div>
                <div className="absolute bottom-5 flex gap-5">
                    <button
                        type="button"
                        className="rounded-full bg-white p-2 text-sky-600 transition-colors hover:bg-sky-100 cursor-pointer"
                        onClick={(e) => onZoom(image)}
                    >
                        <IoIosSearch />
                    </button>
                    <button
                        type="button"
                        className="rounded-full bg-white p-2 text-sky-600 transition-colors hover:bg-sky-100 cursor-pointer"
                        onClick={(e) => aboutPortfolio(id)}
                    >
                        <LuNewspaper />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PortfolioCard;