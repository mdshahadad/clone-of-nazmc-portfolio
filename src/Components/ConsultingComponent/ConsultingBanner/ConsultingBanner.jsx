import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import './Consulting.css'

const ConsultingBanner = () => {
    return (
        <section className="2xl:mx-96 xl:mx-24 xl:mt-16 lg:py-20 py-12 lg:mx-4 mx-4">
            <div className="lg:flex items-center bg-slate-200 rounded-xl lg:px-10 px-4 relative py-12 lg:h-[400px] h-[750px]">
                <div className="xl:w-7/12 lg:w-3/5 lg:space-y-8 space-y-5">
                    <h4 className="text-2xl">Hi There</h4>
                    <h2 className="xl:text-5xl lg:text-4xl text-2xl font-bold">I am Shahadad Hossain, Your <span className="text-red-500">Web Developer</span></h2>
                    <p className="lg:text-xl text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus eligendi optio ex quas deserunt.</p>
                    <div className="lg:flex lg:flex-row flex flex-col gap-4 items-center">
                        <Link className="w-full">
                            <button className="bg-[#202839] text-white font-semibold lg:text-lg text-sm xl:px-10 lg:px-5 px-1 py-4 xl:py-5 lg:py-3 border-[#202839] border-[1px] hover:bg-[#ed2849] hover:border-[#ed2849] transition-all duration-500 w-full" style={{ borderRadius: '10px 0px 10px 10px' }}>
                                Book A Meeting Today
                            </button>
                        </Link>
                        <Link className="w-full">
                            <button className="bg-white text-[#2028239] font-semibold lg:text-lg text-sm xl:px-10 lg:px-5 px-1 py-4 xl:py-5 lg:py-3 border-[#202839] border-[1px] hover:bg-[#ed2849] hover:border-[#ed2849] transition-all duration-500 hover:text-white w-full" style={{ borderRadius: '10px 0px 10px 10px' }}>
                                See Consulting Plans
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="lg:w-5/12 w-80 absolute bottom-8 lg:bottom-0 lg:-right-0">
                    {/* absolute bottom-0 w-5/12 */}
                    <div className="relative">
                        <img className="absolute bottom-0" src="https://i.postimg.cc/xdDSkvJ5/Banner-Img-without-bg-2.png" alt="" />
                        <div className="flex xl:w-[300px] lg:w-[280px] gap-4 consulting-image px-8 xl:py-4 lg:py-5 py-4 rounded-2xl absolute lg:-bottom-8 -bottom-14 xl:right-32 lg:right-16 right-2">
                            <div className="space-y-2">
                                <div className="flex">
                                    <FaStar className="text-amber-400"></FaStar>
                                    <FaStar className="text-amber-400"></FaStar>
                                    <FaStar className="text-amber-400"></FaStar>
                                    <FaStar className="text-amber-400"></FaStar>
                                    <FaStar className="text-amber-400"></FaStar>
                                </div>
                                <h2 className="xl:text-4xl lg:text-2xl font-bold text-white">50+</h2>
                            </div>
                            <div>
                                <h4 className="xl:text-lg lg:text-base text-white font-medium">Video Reviews Can't Be Wrong</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsultingBanner;