function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white p-8 shadow-md">
            <div className="container mx-auto">
                <div className="flex items-center">
                    <div className="w-1/2 text-3xl font-bold">OnePager</div>
                    <div className="hidden w-1/2 md:block">
                        <ul className="flex justify-evenly space-x-4">
                            <li><a href="#" className="text-xl p-2 hover:bg-sky-500 hover:text-white">Home</a></li>
                            <li><a href="#" className="text-xl p-2 hover:bg-sky-500 hover:text-white">Portfolio</a></li>
                            <li><a href="#" className="text-xl p-2 hover:bg-sky-500 hover:text-white">Services</a></li>
                            <li><a href="#" className="text-xl p-2 hover:bg-sky-500 hover:text-white">Team</a></li>
                            <li><a href="#" className="text-xl p-2 hover:bg-sky-500 hover:text-white">About</a></li> 
                            <li><a href="#" className="text-xl p-2 hover:bg-sky-500 hover:text-white">Blog</a></li> 
                            <li><a href="#" className="text-xl p-2 hover:bg-sky-500 hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;