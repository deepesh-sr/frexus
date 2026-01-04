import { CiGrid2H, CiSearch } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
const Nav = () => {
  return (

        <div className='flex h-24 w-full p-4 justify-between items-center bg-gray-600' >
            <div>
                <img 
                src="https://frexuswp.websitelayout.net/wp-content/uploads/2025/11/logo-inner.png" 
                className='w-30'
                alt="image" />
            </div>
            <div className='flex justify-between gap-2'>
                <div>Home</div>
                <div>Pages</div>
                <div>Service</div>
                <div>Portfolio</div>
                <div>Blog</div>
                <div>Contact</div>
            </div>
            <div className="flex gap-2 justify-between">
                <div>
                    <FaShoppingBag/>
                </div>
                <div><CiSearch/></div>
                <div><CiGrid2H/></div>
            </div>
        </div>

  )
}

export default Nav