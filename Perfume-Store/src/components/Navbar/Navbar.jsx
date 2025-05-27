
import { Link, NavLink } from "react-router-dom";
import img from "../../assets/perfume-svgrepo-com.svg";
import { selectCartCount } from "../../redux/cartSlice";
import { selectWishlistCount } from "../../redux/wishlistSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
function Navbar() {
  const cartCount = useSelector(selectCartCount);
  const wishlistCount = useSelector(selectWishlistCount);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
     <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    
        <Link to="/" className="flex items-center space-x-2">
          <img src={img} className="h-8" alt="Arome Logo" />
          <span className="text-2xl font-semibold dark:text-white">AROME</span>
        </Link>

     
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

      
        <div
          className={`w-full lg:flex lg:w-auto items-center justify-between grow ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
        
            <ul className="font-medium lg:flex   m-auto p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="home"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-amber-950 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
              >
                HOME
              </NavLink>
            </li>
                        <li>
              <NavLink
                to="blog"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-amber-950 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
              >
                BLOG
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-amber-950 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-amber-950 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>



          <ul className="font-bold text-2xl flex flex-row space-x-6 p-4 lg:p-0 mt-4 lg:mt-0 border border-gray-100 rounded-lg lg:border-0 bg-gray-50 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
            <li className="flex space-x-6 relative">
            
              <Link to="/wishlist" className="relative">
                <i className="fa-regular fa-heart cursor-pointer"></i>
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-3 text-xs bg-rose-500 text-white rounded-full px-1.5">
                    {wishlistCount}
                  </span>
                )}
              </Link>

             
              <Link to="/cart" className="relative">
                <i className="fa-solid fa-cart-shopping cursor-pointer"></i>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-3 text-xs bg-rose-600 text-white rounded-full px-1.5">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
