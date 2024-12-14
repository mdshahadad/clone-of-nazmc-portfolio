import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import './Consulting.css'

const ConsultingBanner = () => {
    return (
        <section className="mx-96 py-20">
            <div className="flex items-center bg-slate-200 rounded-xl px-10 relative py-12">
                <div className="w-7/12 space-y-8">
                    <h4 className="text-2xl">Hi There</h4>
                    <h2 className="text-5xl font-bold">I am Shahadad Hossain, Your <span className="text-red-500">Web Developer</span> and Part Time Freelancer</h2>
                    <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus eligendi optio ex quas deserunt.</p>
                    <div className="flex gap-4 items-center">
                        <Link className="">
                            <button className="bg-[#202839] text-white font-semibold text-lg px-10 py-5 border-[#202839] border-[1px] hover:bg-[#ed2849] hover:border-[#ed2849] transition-all duration-500" style={{ borderRadius: '10px 0px 10px 10px' }}>
                                Book A Meeting Today
                            </button>
                        </Link>
                        <Link>
                            <button className="bg-white text-[#2028239] font-semibold text-lg px-10 py-5 border-[#202839] border-[1px] hover:bg-[#ed2849] hover:border-[#ed2849] transition-all duration-500 hover:text-white" style={{ borderRadius: '10px 0px 10px 10px' }}>
                                See Consulting Plans
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-5/12 absolute bottom-0 -right-0">
                    {/* absolute bottom-0 w-5/12 */}
                    <div className="relative">
                        <img className="absolute bottom-0" src="https://i.postimg.cc/xdDSkvJ5/Banner-Img-without-bg-2.png" alt="" />
                        <div className="flex w-[300px] gap-4 consulting-image px-8 py-4 rounded-2xl absolute -bottom-8 right-40">
                            <div className="space-y-2">
                                <div className="flex">
                                    <FaStar className="text-amber-400"></FaStar>
                                    <FaStar className="text-amber-400"></FaStar>
                                    <FaStar className="text-amber-400"></FaStar>
                                    <FaStar className="text-amber-400"></FaStar>
                                    <FaStar className="text-amber-400"></FaStar>
                                </div>
                                <h2 className="text-4xl font-bold text-white">50+</h2>
                            </div>
                            <div>
                                <h4 className="text-lg text-white font-medium">Video Reviews Can't Be Wrong</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsultingBanner;