import { PiShoppingCartLight } from "react-icons/pi";
import { Link, NavLink } from "react-router";

const Navbar = () => {

    const navbar = [
        { link: "/consulting", menu: "Consulting" },
        { link: "/learn", menu: "Learn" },
        { link: "/clientSuccess", menu: "Client Success" },
        { link: "/about", menu: "About" },
        { link: "/contact", menu: "Contact" },
    ]

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
                            <ul className="flex">
                                {/* <li className="text-bold text-black">Home</li> */}
                                {
                                    navbar.map((nav, index) => (
                                        <NavLink
                                            className={navbarClasses}
                                            title={nav?.menu}
                                            to={nav?.link}
                                            key={index}
                                            end
                                        >
                                            <h3 className="text-base font-semibold mx-4 hover:text-red-700">{nav?.menu}</h3>
                                        </NavLink>
                                    ))
                                }
                            </ul>
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