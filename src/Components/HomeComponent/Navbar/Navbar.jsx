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
        <nav className="py-1">
            <div className="navbar bg-base-100 xl:px-24">
                <div className="flex justify-between">
                    <div className="flex items-center">

                        <div className="flex-1">
                            <Link to={"/"} className="font-bold text-gray-500 text-3xl">Shahadad.</Link>
                        </div>

                        <div className="ml-16">
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

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;