import { FaHandPointRight } from "react-icons/fa";
import { Link } from "react-router";

const ElevateMarketing = () => {
    return (
        <section>
            <div className="flex justify-center 2xl:px-72 px-8">
                <div className="flex justify-center items-center">
                    <div className="xl:w-2/5 lg:w-4/5 xl:space-y-8 lg:space-y-5">
                        <img src="https://nazmc.com/wp-content/uploads/2024/10/elevate-650x89.webp" alt="" />
                        <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ut et, quibusdam commodi quae at! adipisicing elit. A ut et, quibusdam commodi quae at!</p>
                        <div className="flex items-center">
                            <FaHandPointRight className="text-yellow-500 text-3xl"></FaHandPointRight>
                            <h4 className="text-2xl text-red-500 ml-2">Ready to Build marketing team?</h4>
                        </div>
                        <Link>
                            <button className="text-white bg-[#202839] px-14 rounded-xl py-5 mt-8 text-lg font-semibold" style={{borderRadius: '10px 0px 10px 10px'}}>
                                Get Your Copy Now
                            </button>
                        </Link>
                    </div>
                    <div className="ml-20 xl:w-3/6 lg:w-3/4">
                        <img className="w-3/4" src="https://nazmc.com/wp-content/uploads/2024/10/BMT-249tk-650x714.webp" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ElevateMarketing;