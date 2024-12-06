import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft, HiOutlineShoppingCart } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi";

import avatarImg from "../assets/avatar.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase/firebase.config";

const navigation = [
  { name: "Dashboard", href: "/user-dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const { currentUser, logout } = useAuth();

  const handleLogOut = () => {
    logout(); // Logs out the user and clears the session
  };

  const token = localStorage.getItem("token"); // Get the token from localStorage

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* Left side */}
        <div className="flex items-center gap-4 md:gap-16">
          <Link to="/">
            <HiMiniBars3CenterLeft className="text-2xl" />
          </Link>

          {/* Search input with marquee */}
          <div className="relative w-full sm:w-96 lg:w-[1030px] h-12 overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] rounded-lg">
            <div className="absolute whitespace-nowrap animate-scroll text-gray-900 text-xl font-medium tracking-wide mt-2">
              Welcome to my Bookstore - Books for Every Imagination, Knowledge for Every Mind
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="relative flex items-center gap-4">
          <div>
            {
              currentUser ? (
                <>
                  {/* Show user avatar if logged in */}
                  <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <img
                      src={avatarImg}
                      alt="User Avatar"
                      className={`w-8 h-8 rounded-full ${currentUser ? 'ring-2 ring-blue-500 mt-2' : ''}`}
                    />
                  </button>

                  {/* Dropdown menu */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md z-40 border border-gray-200">
                      <div className="py-2 px-4 bg-gray-100 text-sm font-medium text-gray-700">
                        <strong>{currentUser.email}</strong> {/* Display the email */}
                      </div>
                      <ul className="py-2">
                        {
                          navigation.map((item) => (
                            <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                              <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                                {item.name}
                              </Link>
                            </li>
                          ))
                        }
                        <li>
                          <button onClick={handleLogOut} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Logout</button>
                        </li>
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                // Show the user icon when logged out or when there's no token
                <Link to="/login">
                  <HiOutlineUser className="text-2xl" />
                </Link>
              )
            }
          </div>

          {/* Cart Section */}
          <Link to="/cart" className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm">
            <HiOutlineShoppingCart className="text-xl" />
            <span className="text-sm font-semibold sm:ml-1">
              {cartItems.length > 0 ? cartItems.length : 0}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
