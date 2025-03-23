import { useState } from "react";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import avatarIMG from "../assets/avatar.png";
import { useSelector } from "react-redux";
import LogoIMG from "../assets/footer-logo.png"
import { useAuth } from "../context/AuthContext";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Orders",
    href: "/orders",
  },
  {
    name: "Cart Page",
    href: "/cart",
  },
  {
    name: "Check Out",
    href: "/checkout",
  },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItems = useSelector(state => state.cart.cartItems)

  const {currentUser, logOut} = useAuth()

  const handleLogOut = () => {
    logOut()
  }

  return (
    <header className="max-w-screen-2xl mx-auto px-4 sm:px-40 py-6 shadow-xl top-0 sticky z-50 bg-white">
      <nav className="flex justify-between items-center ">
        {/* Left Side*/}
        <div className="flex items-center md:gap-16 gap-4">
          {/*bars*/}
          <Link to="/">
            {/* <HiOutlineBars3CenterLeft className="size-6" /> */}
            <img src={LogoIMG} alt="Book Store Logo" className="size-8"/>
          </Link>

          {/* Search Input*/}
          <div className="relative sm:w-72 w-40 space-x-1">
            <IoSearchOutline className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="search here"
              className="bg-[#EAEAEA] w-full h-8 py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Right Side*/}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={avatarIMG}
                    alt=""
                    className={`size-7 rounded-full ${
                      currentUser ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </button>

                {/** Show Dropdown */}
                {
                  isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-40">
                      <ul className="py-2">
                        {
                          navigation.map((item) => (
                            <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                              <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100 text-black">{item.name}</Link>
                            </li>
                          ))
                        }
                        <li>
                          <button onClick={handleLogOut} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Logout</button>
                        </li>
                      </ul>
                    </div>
                  )
                }
              </>
            ) : (
              <Link to="/login">
                <FaRegUserCircle className="size-6 text-black" />
              </Link>
            )}
          </div>
          <button className="hidden sm:block">
            <FaRegHeart className="size-6" />
          </button>

          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm text-black hover:text-white"
          >
            <HiOutlineShoppingCart className="" />
            {
              cartItems.length > 0 ? <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span> : <span className="text-sm font-semibold sm:ml-1">0</span>
            }
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
