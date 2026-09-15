import React from 'react'
import { useState, useEffect, useRef } from 'react'
import logo from "../assets/logo.png"

function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); 
    const menuRef = useRef(null); 
    const buttonRef = useRef(null); 
    
    const toggleMobileMenu = (event) => { 
        event.stopPropagation(); 
        setMobileMenuOpen((prev) => !prev); 
    }; 
    
    useEffect(() => { 
        const handleClickOutside = (event) => { 
            if ( menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target) ) { 
                setMobileMenuOpen(false); 
            } 
        }; 
            
        document.addEventListener("mousedown", handleClickOutside); 

        return () => { 
            document.removeEventListener("mousedown", handleClickOutside); 
        }; 
    }, []);
    
    return (
        <nav className="sticky top-0 z-50 bg-white/90 py-5 lg:p-5 shadow-md w-full">
            <div className="container mx-auto pl-2">
                <div className='flex justify-end'>
                    <button
                        ref={buttonRef}
                        type="button"
                        onClick={toggleMobileMenu}
                        className="ml-auto text-2xl md:hidden"
                    >
                        &#9776;
                    </button>


                </div>
                <div className="flex items-center">
                    <div className="mr-6">
                        <img src={logo} alt="OnePager" />
                    </div>
                    <div className="ml-auto hidden md:block">
                        <ul className="flex items-center gap-2">
                            <li><a href="#Home" className="relative px-1 lg:px-4 py-3 font-['Courier_New'] text-[17px] md:text-[13px] lg:text-[18px] uppercase text-[#010000] transition-all duration-170 ease-in-out hover:bg-[#2bb6b6] hover:text-white">Home</a></li>
                            <li><a href="#Portfolio" className="relative px-1 lg:px-4 py-3 font-['Courier_New'] text-[17px] md:text-[13px] lg:text-[18px] uppercase text-[#010000] transition-all duration-170 ease-in-out hover:bg-[#2bb6b6] hover:text-white">Portfolio</a></li>
                            <li><a href="#Services" className="relative px-1 lg:px-4 py-3 font-['Courier_New'] text-[17px] md:text-[13px] lg:text-[18px] uppercase text-[#010000] transition-all duration-170 ease-in-out hover:bg-[#2bb6b6] hover:text-white">Services</a></li>
                            <li><a href="#Team" className="relative px-1 lg:px-4 py-3 font-['Courier_New'] text-[17px] md:text-[13px] lg:text-[18px] uppercase text-[#010000] transition-all duration-170 ease-in-out hover:bg-[#2bb6b6] hover:text-white">Team</a></li>
                            <li><a href="#About" className="relative px-1 lg:px-4 py-3 font-['Courier_New'] text-[17px] md:text-[13px] lg:text-[18px] uppercase text-[#010000] transition-all duration-170 ease-in-out hover:bg-[#2bb6b6] hover:text-white">About</a></li> 
                            <li><a href="#Blog" className="relative px-1 lg:px-4 py-3 font-['Courier_New'] text-[17px] md:text-[13px] lg:text-[18px] uppercase text-[#010000] transition-all duration-170 ease-in-out hover:bg-[#2bb6b6] hover:text-white">Blog</a></li> 
                            <li><a href="#Contact" className="relative px-1 lg:px-4 py-3 font-['Courier_New'] text-[17px] md:text-[13px] lg:text-[18px] uppercase text-[#010000] transition-all duration-170 ease-in-out hover:bg-[#2bb6b6] hover:text-white text-nowrap">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div
                        ref={menuRef}
                        className="mt-4 border-t border-gray-200 pt-4 md:hidden"
                    >
                        <ul className="flex flex-col gap-2">
                            <li>
                                <a href="#Home" className="block px-4 py-3 hover:bg-[#2bb6b6] hover:text-white">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="#Portfolio" className="block px-4 py-3 hover:bg-[#2bb6b6] hover:text-white">
                                    Portfolio
                                </a>
                            </li>

                            <li>
                                <a href="#Services" className="block px-4 py-3 hover:bg-[#2bb6b6] hover:text-white">
                                    Services
                                </a>
                            </li>

                            <li>
                                <a href="#Team" className="block px-4 py-3 hover:bg-[#2bb6b6] hover:text-white">
                                    Team
                                </a>
                            </li>

                            <li>
                                <a href="#About" className="block px-4 py-3 hover:bg-[#2bb6b6] hover:text-white">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#Blog" className="block px-4 py-3 hover:bg-[#2bb6b6] hover:text-white">
                                    Blog
                                </a>
                            </li>

                            <li>
                                <a href="#Contact" className="block px-4 py-3 hover:bg-[#2bb6b6] hover:text-white">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                )}

            </div>
        </nav>
    );
}

export default Navbar;