import { CiGrid2H, CiSearch } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";

const Nav = () => {
    return (
        <>
                

                {/* Navbar - Now with relative positioning and z-index */}
                <div className='absolute z-30 flex h-24 w-full p-4 justify-between items-center'>
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
                <div className="relative w-full border-b-blue-200 border-[0.1px] z-10"></div>
        </>
    )
}

export default Nav