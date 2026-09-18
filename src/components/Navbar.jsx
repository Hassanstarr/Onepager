import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { FaUserCircle } from "react-icons/fa"
import { HiOutlineBars3 } from "react-icons/hi2";
import logo from "../assets/logo.png"

function Navbar({ token, setAuthModalOpen }) {
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
        <nav className="sticky top-0 z-50 w-full bg-white/90 py-5 shadow-md lg:p-5">
            <div className="w-full px-4 lg:px-5">
                <div className='flex justify-end'>
                    <button
                        ref={buttonRef}
                        type="button"
                        onClick={toggleMobileMenu}
                        className="mt-5 mr-3 mb-2 border border-[#dddddd] text-[#555555] px-2 py-1 text-2xl md:hidden"
                    >
                        <HiOutlineBars3 />
                    </button>


                </div>
                <div className="flex w-full items-center justify-between">
                    <div className="mr-6">
                        <img src={logo} alt="OnePager" />
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-2">
                            <li><a href="#Home" className="relative px-1 lg:px-4 py-3 font-['Courier_New'] text-[17px] md:text-[13px] lg:text-[18px] uppercase text-[#010000] transition-all duration-170 ease-in-out hover:bg-[#2bb6b6] hover:text-white">Home</a></li>
                            <li><a href="#Portfolio" className="relative px-1 lg:px-4 py-3 font-['Courier_New'] text-[17px] md:text-[13px] lg:text-[18px] uppercase text-[#010000] transition-all duration-170 ease-in-out hover:bg-[#2bb6b6] hover:text-white">Portfolio</a></li>
                            <li><a href="#Services" className="relative px-1 lg:px-4 py-3 font-['Courier_New'] text-[17px] md:text-[13px] lg:text-[18px] uppercase text-[#010000] transition-all duration-170 ease-in-out hover:bg-[#2bb6b6] hover:text-white">Services</a></li>
                            <li><a href="#Team" className="relative px-1 lg:px-4 py-3 font-['Courier_New'] text-[17px] md:text-[13px] lg:text-[18px] uppercase text-[#010000] transition-all duration-170 ease-in-out hover:bg-[#2bb6b6] hover:text-white">Team</a></li>
                            <li><a href="#About" className="relative px-1 lg:px-4 py-3 font-['Courier_New'] text-[17px] md:text-[13px] lg:text-[18px] uppercase text-[#010000] transition-all duration-170 ease-in-out hover:bg-[#2bb6b6] hover:text-white">About</a></li> 
                            <li><a href="#Blog" className="relative px-1 lg:px-4 py-3 font-['Courier_New'] text-[17px] md:text-[13px] lg:text-[18px] uppercase text-[#010000] transition-all duration-170 ease-in-out hover:bg-[#2bb6b6] hover:text-white">Blog</a></li> 
                            <li><a href="#Contact" className="relative px-1 lg:px-4 py-3 font-['Courier_New'] text-[17px] md:text-[13px] lg:text-[18px] uppercase text-[#010000] transition-all duration-170 ease-in-out hover:bg-[#2bb6b6] hover:text-white text-nowrap">Contact Us</a></li>
                            <li>
                                <button 
                                    onClick={() => setAuthModalOpen(true)}
                                    className="relative px-1 lg:px-4 py-3 flex items-center justify-center transition-all duration-170 ease-in-out cursor-pointer"
                                    title={token ? "Account" : "Login"}
                                >
                                    <FaUserCircle size={24} color={token ? "#2bb6b6" : "#ef4444"} />
                                </button>
                            </li>
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
                            
                            <li>
                                <button 
                                    onClick={() => {
                                        setAuthModalOpen(true);
                                        setMobileMenuOpen(false);
                                    }}
                                    className="w-full text-left flex items-center gap-2 px-4 py-3 hover:bg-[#2bb6b6] hover:text-white cursor-pointer"
                                >
                                    <FaUserCircle size={20} color={token ? "#2bb6b6" : "#ef4444"} />
                                    <span>{token ? "Account" : "Login"}</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                )}

            </div>
        </nav>
    );
}

export default Navbar;