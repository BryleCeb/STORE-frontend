import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft, HiOutlineShoppingCart } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi";
import avatarImg from "../assets/avatar.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const navigation = [
    { name: "Orders", href: "/orders" },
    { name: "Cart Page", href: "/cart" },
    { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const cartItems = useSelector(state => state.cart.cartItems);
    const { currentUser, logout } = useAuth();

    const handleLogOut = () => {
        logout();
    };

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header className="sticky top-0 bg-gray-200 shadow z-50" style={{
            background: 'linear-gradient(to right, #c5c9bb, #f3f1e9)', // Change colors as needed
        }}>
            <nav className="max-w-screen-2xl mx-auto px-4 py-6 flex justify-between items-center">
                {/* Left side */}
                <div className="flex items-center md:gap-16 gap-4">
                    <Link to="/" onClick={scrollToTop}>
                        <HiMiniBars3CenterLeft className="size-6" />
                    </Link>
                </div>

                {/* Right side */}
                <div className="relative flex items-center md:space-x-3 space-x-2">
                    <div>
                        {currentUser ? (
                            <>
                                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                    <img src={avatarImg} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-green-500' : ''}`} />
                                </button>
                                {/* Show dropdowns */}
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                                        <ul className="py-2">
                                            {navigation.map((item) => (
                                                <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                                                    <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                            <li>
                                                <button
                                                    onClick={handleLogOut}
                                                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </>
                        ) : (
                            <Link to="/login"><HiOutlineUser className="size-6" /></Link>
                        )}
                    </div>

                    <Link to="/cart" className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm">
                        <HiOutlineShoppingCart className='' />
                        <span className="text-sm font-semibold sm:ml-1">{cartItems.length > 0 ? cartItems.length : 0}</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;