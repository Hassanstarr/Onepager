import logo from "../assets/logo.png"

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white/90 p-5 shadow-md">
            <div className="container mx-auto">
                <div className="flex items-center">
                    <div>
                        <img src={logo} alt="OnePager" />
                    </div>
                    <div className="ml-auto hidden md:block">
                        <ul className="flex items-center gap-2">
                            <li><a href="#Home" className="relative px-4 py-3 font-['Courier_New'] text-[18px] uppercase text-[#010000] transition-all duration-170 ease-in-out hover:bg-[#2bb6b6] hover:text-white">Home</a></li>
                            <li><a href="#Portfolio" className="relative px-4 py-3 font-['Courier_New'] text-[18px] uppercase text-[#010000] transition-all duration-170 ease-in-out hover:bg-[#2bb6b6] hover:text-white">Portfolio</a></li>
                            <li><a href="#Services" className="relative px-4 py-3 font-['Courier_New'] text-[18px] uppercase text-[#010000] transition-all duration-170 ease-in-out hover:bg-[#2bb6b6] hover:text-white">Services</a></li>
                            <li><a href="#" className="relative px-4 py-3 font-['Courier_New'] text-[18px] uppercase text-[#010000] transition-all duration-170 ease-in-out hover:bg-[#2bb6b6] hover:text-white">Team</a></li>
                            <li><a href="#About" className="relative px-4 py-3 font-['Courier_New'] text-[18px] uppercase text-[#010000] transition-all duration-170 ease-in-out hover:bg-[#2bb6b6] hover:text-white">About</a></li> 
                            <li><a href="#Blog" className="relative px-4 py-3 font-['Courier_New'] text-[18px] uppercase text-[#010000] transition-all duration-170 ease-in-out hover:bg-[#2bb6b6] hover:text-white">Blog</a></li> 
                            <li><a href="#" className="relative px-4 py-3 font-['Courier_New'] text-[18px] uppercase text-[#010000] transition-all duration-170 ease-in-out hover:bg-[#2bb6b6] hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;