import { IoIosArrowDown, IoMdCloseCircle } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
import { Link, NavLink } from "react-router";
import './Navbar.css'
import { useState } from "react";

const Navbar = () => {
    const [openClose, setOpenClose] = useState(false);

    const handleShoppingCart = () => {
        setOpenClose(!openClose);
        console.log('clicked')
    }

    const navbar = [
        {
            link: "/consulting",
            menu: "Consulting",
            icon: <IoIosArrowDown />,
            submenu: [
                { link: "/marketing-audit-service", menu: "Marketing Audit and Strategy" },
                { link: "/consulting/operations", menu: "Marketing Advisor" },
                { link: "/consulting/technology", menu: "Team Building" },
                { link: "/consulting/technology", menu: "Part Time CMO" },
            ],
        },
        {
            link: "/learn",
            menu: "Learn",
            icon: <IoIosArrowDown />,
            submenu: [
                { link: "/learn/web-development", menu: "Freelancing Course - Paid" },
                { link: "/learn/design", menu: "Freelancing Course - Paid" },
                { link: "/learn/marketing", menu: "Freelancing Course - Paid" },
                { link: "/learn/marketing", menu: "Freelancing Course - Paid" },
                { link: "/learn/marketing", menu: "Freelancing Course - Paid" },
                { link: "/learn/marketing", menu: "Freelancing Course - Paid" },
                { link: "/learn/marketing", menu: "Freelancing Course - Paid" },
                { link: "/learn/marketing", menu: "Freelancing Course - Paid" },
            ],
        },
        { link: "/clientSuccess", menu: "Client Success" },
        { link: "/about", menu: "About" },
        { link: "/contact", menu: "Contact" },
    ];


    const navbarClasses = ({ isActive }) => isActive ? "text-white" : ""

    return (
        <nav className="py-4 lg:px-8 shadow-md fixed w-full top-0 bg-base-100 z-10">
            <div className="xl:px-24 relative">

                {/* Shopping Cart Drawer */}
                <div className={`${openClose === true ? 'top-0 -left-7 px-4 w-80  transition-all duration-700' : "top-0 -left-96  transition-all duration-700"} bg-white absolute h-screen  transition-all duration-700 space-y-4`}>
                    <div className="flex justify-end">
                        <button
                            onClick={() => setOpenClose(!openClose)}><IoMdCloseCircle className="text-4xl mr-4" /></button>
                    </div>
                    <p>No Products available</p>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex items-center">

                        <div className="flex">
                            <Link to={"/"} className="font-bold text-gray-500 text-3xl">Shahadad.</Link>
                        </div>

                        <div className="xl:ml-24 lg:ml-12">
                            <ul className="flex items-center space-x-6">
                                {navbar.map((nav, index) => (
                                    <li key={index} className="relative group">
                                        {/* Parent Menu Item */}
                                        <NavLink
                                            to={nav?.link}
                                            className="text-gray-800 font-medium hover:text-red-500 flex items-center gap-1"
                                        >
                                            <h3 className="flex items-center font-semibold text-lg">{nav?.menu}
                                                {nav?.icon && <span className="mt-1 ml-1">{nav?.icon}</span>}</h3>
                                        </NavLink>

                                        {/* Dropdown Menu */}
                                        {nav.submenu && (
                                            <ul className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md py-2 w-64 z-10">
                                                {nav.submenu.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <NavLink
                                                            to={subItem.link}
                                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-500"
                                                        >
                                                            {subItem.menu}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>


                            {/* <ul className="flex">
                                {
                                    navbar.map((nav, index) => (
                                        <NavLink
                                            className={navbarClasses}
                                            title={nav?.menu}
                                            to={nav?.link}
                                            key={index}
                                            end
                                        >
                                            <h3 className="text-lg font-semibold mx-4 hover:text-red-700 flex items-center gap-2">{nav?.menu} <span className="mt-1">{nav?.icon}</span></h3>
                                        </NavLink>
                                    ))
                                }
                            </ul> */}
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center xl:gap-12 lg:gap-5">
                            <div onClick={handleShoppingCart}>
                                <PiShoppingCartLight className="text-2xl cursor-pointer" />
                            </div>
                            <div className="flex items-center xl:gap-10 lg:gap-5">
                                <Link to={'/signup'}>
                                    <button className="text-red-600 text-lg font-semibold">
                                        SignUp
                                    </button>
                                </Link>
                                <Link to={'/login'}>
                                    <button className="border-[1px] px-7 py-2 rounded-md border-black">
                                        Login
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;