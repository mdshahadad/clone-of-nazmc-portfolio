import { IoIosArrowDown } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
import { Link, NavLink } from "react-router";
import './Navbar.css'

const Navbar = () => {

    // const navbar = [
    //     { link: "/consulting", menu: "Consulting", icon: <IoIosArrowDown /> },
    //     { link: "/learn", menu: "Learn", icon: <IoIosArrowDown /> },
    //     { link: "/clientSuccess", menu: "Client Success" },
    //     { link: "/about", menu: "About" },
    //     { link: "/contact", menu: "Contact" },
    // ]

    const navbar = [
        {
            link: "/consulting",
            menu: "Consulting",
            icon: <IoIosArrowDown />,
            submenu: [
                { link: "/consulting/strategy", menu: "Marketing Audit and Strategy" },
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
        <nav className="py-4 lg:px-8">
            <div className="bg-base-100 xl:px-24">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">

                        <div className="flex">
                            <Link to={"/"} className="font-bold text-gray-500 text-3xl">Shahadad.</Link>
                        </div>

                        <div className="xl:ml-24">
                            <ul className="flex items-center space-x-6">
                                {navbar.map((nav, index) => (
                                    <li key={index} className="relative group">
                                        {/* Parent Menu Item */}
                                        <NavLink
                                            to={nav?.link}
                                            className="text-gray-800 font-medium hover:text-red-500 flex items-center gap-1"
                                        >
                                            {nav?.menu}
                                            {nav?.icon && <span>{nav?.icon}</span>}
                                        </NavLink>

                                        {/* Dropdown Menu */}
                                        {nav.submenu && (
                                            <ul className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md py-2 w-48 z-10">
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
                        <div className="flex items-center gap-12">
                            <div>
                                <PiShoppingCartLight className="text-2xl cursor-pointer" />
                            </div>
                            <div className="flex items-center gap-10">
                                <button className="text-red-600 text-lg font-semibold">
                                    <Link>SignUp</Link>
                                </button>
                                <button className="border-[1px] px-7 py-2 rounded-md border-black">
                                    <Link>Login</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;