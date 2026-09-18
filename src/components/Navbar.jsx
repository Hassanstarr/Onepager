import React, { useState, useEffect, useRef } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";
import logo from "../assets/logo.png";

function Navbar({ token, setAuthModalOpen }) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleMobileMenu = (event) => {
        event.stopPropagation();
        setMobileMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const navItems = [
        { id: 'Home', label: 'Home' },
        { id: 'Portfolio', label: 'Portfolio' },
        { id: 'Services', label: 'Services' },
        { id: 'Team', label: 'Team' },
        { id: 'About', label: 'About' },
        { id: 'Blog', label: 'Blog' },
        { id: 'Contact', label: 'Contact Us' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100; 
            let current = 'Home';

            for (const item of navItems) {
                const element = document.getElementById(item.id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        current = item.id;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/90 py-5 shadow-md lg:p-5">
            <div className="w-full px-4 lg:px-5">
                <div className="flex w-full items-center justify-between">
                    <div className="mr-6">
                        <img src={logo} alt="OnePager" className="max-h-12 w-auto" />
                    </div>
                    
                    <button
                        ref={buttonRef}
                        type="button"
                        onClick={toggleMobileMenu}
                        className="border border-[#dddddd] text-[#555555] px-2 py-1 text-2xl md:hidden"
                    >
                        <HiOutlineBars3 />
                    </button>

                    <div className="hidden md:block">
                        <ul className="flex items-center gap-2">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={(e) => handleNavClick(e, item.id)}
                                        className={`relative px-1 lg:px-4 py-3 font-['Courier_New'] text-[17px] md:text-[13px] lg:text-[18px] uppercase whitespace-nowrap transition-all duration-170 ease-in-out cursor-pointer ${
                                            activeSection === item.id 
                                                ? 'bg-[#2bb6b6] text-white' 
                                                : 'text-[#010000] hover:bg-[#2bb6b6] hover:text-white'
                                        }`}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
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
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={(e) => handleNavClick(e, item.id)}
                                        className={`w-full text-left block px-4 py-3 uppercase whitespace-nowrap ${
                                            activeSection === item.id 
                                                ? 'bg-[#2bb6b6] text-white' 
                                                : 'text-[#010000] hover:bg-[#2bb6b6] hover:text-white'
                                        }`}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                            <li>
                                <button
                                    onClick={() => {
                                        setAuthModalOpen(true);
                                        setMobileMenuOpen(false);
                                    }}
                                    className="w-full text-left flex items-center gap-2 px-4 py-3 uppercase hover:bg-[#2bb6b6] hover:text-white cursor-pointer"
                                >
                                    <FaUserCircle size={20} color={token ? "#2bb6b6" : "#ef4444"} />
                                    <span>{token ? "ACCOUNT" : "LOGIN"}</span>
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