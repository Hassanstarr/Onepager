import {useState} from 'react'
import aboutData from "../data/about.jsx";
import clients from "../data/clients.js";

function About() {
    const [currentPage, setCurrentPage] = useState(0);
    
    return(
        <div id="About" >

            <div className="w-full page-container grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">
                
                <div className="grid grid-rows-[auto-1fr]">
                    <div className="mb-10">
                        <h2 className="mb-1.5 font-['Courier_New'] text-[35px] font-bold uppercase">
                            Company Biography
                        </h2>

                        <span className="inline-block bg-[#2bb6b6] px-1.5 font-['Courier_New'] text-[18px] uppercase text-white">
                            Short story about us
                        </span>
                    </div>

                    <div>
                        <p className="mb-5 font-['Courier_New'] text-[20px] leading-6.5 text-[#8b8b8b]">This is <span className="font-bold text-[#2bb6b6]">Photoshop's</span> version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit</p>

                        <p className="mb-5 font-['Courier_New'] text-[20px] leading-6.5 text-[#8b8b8b]">Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. <span className="font-bold text-[#2bb6b6]">Class aptent taciti</span> sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                        <p className="mb-5 font-['Courier_New'] text-[20px] leading-6.5 text-[#8b8b8b]">Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non</p>
                    </div>
                </div>

                <div className="grid grid-rows-[auto-1fr]">
                    <div>
                        <div>
                            <h2 className="mb-1.5 font-['Courier_New'] text-[35px] font-bold uppercase">
                                Our Clients
                            </h2>
                        </div>

                        <div>
                            <span className="inline-block bg-[#2bb6b6] px-1.5 font-['Courier_New'] text-[18px] uppercase text-white">
                                We love our clients
                            </span>
                        </div>
                    </div>

                    

                    <div className="relative lg:-top-15">

                        <div className="absolute right-0 top-0 flex gap-2">
                            {clients.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentPage(index)}
                                    className={`h-2.5 w-2.5 cursor-pointer rounded-full transition ${
                                        currentPage === index
                                            ? "bg-[#2bb6b6]"
                                            : "bg-[#d5d5d5]"
                                    }`}
                                />
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-5 pt-10">
                            {clients[currentPage].map((client, index) => (
                                <div
                                    key={index}
                                    className="flex h-37 items-center justify-center border border-[#e4e4e4] bg-[#2bb6b6]"
                                >
                                    <img
                                        src={client}
                                        alt={`Client ${index + 1}`}
                                        className="max-h-12 max-w-32 object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>


                </div>

            </div>

            <div className="w-full page-container mt-10">
                <div className="my-10 text-center">
                    <h1 className="mx-2.5 font-['Courier_New'] text-[45px] font-bold uppercase">
                    Company stats
                    </h1>

                    <p className="font-['Courier_New'] text-[18px] leading-6 text-[#838383]">
                    SThis is Photoshop's version of Lorem Ipsum. Proin gravida
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    
                    {aboutData.map((stats, index) => (
                        <div key={index} className="flex flex-col items-center justify-center px-1 md:px-2.5 py-12.5 text-center border border-[#e4e4e4]">
                            <div className="mb-5 text-4xl text-[#2bb6b6]">
                                {stats.icon}
                            </div>

                            <span className="mb-3 inline-block font-['Courier_New'] text-[36px] leading-9 text-[#060606]">
                                {stats.number}
                            </span>

                            <p className="m-0 font-['Courier_New'] text-[18px] text-[#c7c7c7]">
                                {stats.text}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default About