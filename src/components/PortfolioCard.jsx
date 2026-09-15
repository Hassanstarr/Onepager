import { useState, useEffect, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { LuNewspaper } from "react-icons/lu";

function PortfolioCard({ id, image, title, text, onZoom, aboutPortfolio }) {
    const [isOpen, setIsOpen] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        function handleOutsideClick(e) {
            if (cardRef.current && !cardRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, []);

    return (
        <div
            ref={cardRef}
            className="group relative self-start overflow-hidden shadow-md"
            onClick={() => setIsOpen(true)}
        >
            <img src={image} alt={title} className="block h-auto w-full" />
            <div
                className={`absolute inset-0 flex flex-col items-center justify-center bg-[rgba(43,182,182,0.9)] p-4 pb-16 text-center text-white opacity-0 transition-opacity duration-300
                    [@media(hover:hover)]:group-hover:opacity-100
                    [@media(hover:none)]:${isOpen ? "opacity-100" : "opacity-0"}
                `}
            >
                <div>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p>{text}</p>
                </div>
                <div className="absolute bottom-5 flex gap-5">
                    <button
                        type="button"
                        className="rounded-full bg-white p-2 text-sky-600 transition-colors hover:bg-sky-100 cursor-pointer"
                        onClick={(e) => {
                            e.stopPropagation();
                            onZoom(image);
                        }}
                    >
                        <IoIosSearch />
                    </button>
                    <button
                        type="button"
                        className="rounded-full bg-white p-2 text-sky-600 transition-colors hover:bg-sky-100 cursor-pointer"
                        onClick={(e) => {
                            e.stopPropagation();
                            aboutPortfolio(id);
                        }}
                    >
                        <LuNewspaper />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PortfolioCard;