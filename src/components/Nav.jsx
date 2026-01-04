import { CiGrid2H, CiSearch } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { useState, useEffect } from "react";

const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#003751] shadow-lg' : 'bg-transparent'}`}>
            {/* Navbar */}
            <div className='flex h-24 w-full p-4 justify-between items-center'>
                <div>
                    <img
                        src="https://frexuswp.websitelayout.net/wp-content/uploads/2025/11/logo-inner.png"
                        className='w-50'
                        alt="Frexus Logo" 
                    />
                </div>
                <div className='flex justify-between gap-6 text-white font-medium text-2xl'>
                    <div className="cursor-pointer hover:text-orange-500 transition">Home</div>
                    <div className="cursor-pointer hover:text-orange-500 transition">Pages</div>
                    <div className="cursor-pointer hover:text-orange-500 transition">Service</div>
                    <div className="cursor-pointer hover:text-orange-500 transition">Portfolio</div>
                    <div className="cursor-pointer hover:text-orange-500 transition">Blog</div>
                    <div className="cursor-pointer hover:text-orange-500 transition">Contact</div>
                </div>
                <div className="flex gap-4 text-white text-xl">
                    <div className="cursor-pointer hover:text-orange-500 transition">
                        <FaShoppingBag />
                    </div>
                    <div className="cursor-pointer hover:text-orange-500 transition">
                        <CiSearch />
                    </div>
                    <div className="cursor-pointer hover:text-orange-500 transition">
                        <CiGrid2H />
                    </div>
                </div>
            </div>
            <div className={`w-full border-b transition-all duration-300 ${isScrolled ? 'border-white/10' : 'border-white/30'}`}></div>
        </div>
    )
}

export default Nav