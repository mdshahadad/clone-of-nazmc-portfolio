import { Link } from "react-router";

const LearnBanner = () => {
    return (
        <section className="lg:pb-20 pb-36">
            <div className="lg:flex justify-between items-center 2xl:px-80 lg:px-8 px-4">
                <div className="text-[#202839] space-y-4">
                    <h4 className="text-xl font-medium">Learn <span className="text-red-500">with</span> Nazmul</h4>
                    <h2 className="xl:text-5xl lg:text-4xl text-3xl font-bold">Web Developing <br /> <span className="text-red-500">Courses</span> And Resources</h2>
                    <div className="lg:flex gap-4 pt-10 hidden">
                        <button className="bg-[#202839] xl:px-20 px-12 text-white xl:py-5 lg:py-3 hover:text-black hover:bg-red-500 font-semibold text-lg transition-all duration-500" style={{ borderRadius: '10px 0px 10px 10px' }}>
                            <Link to={`/learn/#books`}>Book</Link>
                        </button>
                        <button className="bg-[#202839] xl:px-20 px-12 text-white xl:py-5 lg:py-3 hover:text-black hover:bg-red-500 font-semibold text-lg transition-all duration-500" style={{ borderRadius: '10px 0px 10px 10px' }}>
                            <Link to={`/learn/#books`}>Courses</Link>
                        </button>
                        <button className="bg-[#202839] xl:px-20 px-12 text-white xl:py-5 lg:py-3 hover:text-black hover:bg-red-500 font-semibold text-lg transition-all duration-500" style={{ borderRadius: '10px 0px 10px 10px' }}>
                            <Link to={`/learn/#books`}>Free Guides</Link>
                        </button>
                    </div>
                </div>
                <div className="relative">
                    <div className="lg:block flex justify-center lg:pt-0 pt-8">
                        <img className="xl:w-[570px] lg:w-[400px] w-80 h-80 xl:h-[570px] lg:h-[400px] bg-amber-500 rounded-full" src={`https://i.postimg.cc/xdDSkvJ5/Banner-Img-without-bg-2.png`} alt="" />
                    </div>
                    <div className="">
                        <div className="flex justify-center">
                            <div className="flex lg:gap-5 gap-8 absolute lg:-bottom-24 bottom-0 lg:right-0">
                                <div className="bg-[#E54444] text-white xl:py-4 lg:py-3 px-2 py-2 xl:w-[200px] lg:w-[170px] space-y-2 flex xl:items-center lg:items-start" style={{ borderRadius: '10px 2px 10px 10px' }}>
                                    <div className="space-y-2">
                                        <h3 className="xl:text-5xl lg:text-3xl text-xl font-bold">2+</h3>
                                        <p className="text-sm">Years experience in <br /> Developing</p>
                                    </div>
                                </div>
                                <div className="bg-[#202839] xl:py-4 lg:py-3 px-2 py-2 xl:w-[200px] lg:w-[170px] space-y-2 text-white flex xl:items-center lg:items-start" style={{ borderRadius: '10px 2px 10px 10px' }}>
                                    <div className="space-y-2">
                                        <h3 className="xl:text-5xl lg:text-3xl text-xl font-bold">1M+</h3>
                                        <p className="text-sm">Views on Social Media <br /> & Youtube Channel</p>
                                    </div>
                                </div>
                                <div className="bg-[#E54444] text-white xl:py-4 lg:py-3 px-2 py-2 xl:w-[200px] lg:w-[170px] space-y-2 lg:items-start hidden xl:block" style={{ borderRadius: '10px 2px 10px 10px' }}>
                                    <div className="space-y-2">
                                        <h3 className="xl:text-5xl lg:text-3xl text-xl font-bold">20+</h3>
                                        <p className="text-sm">Project Completed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center lg:hidden">
                            <div className="lg:flex gap-4 mt-8 absolute -bottom-20">
                                <button className="bg-[#202839] xl:px-20 px-12 text-white xl:py-5 lg:py-3 py-4 hover:text-black hover:bg-red-500 font-semibold text-lg transition-all duration-500" style={{ borderRadius: '10px 0px 10px 10px' }}>
                                    <Link to={`/learn/#books`}>Book</Link>
                                </button>
                                <button className="bg-[#202839] xl:px-20 px-12 text-white xl:py-5 lg:py-3 py-4 hover:text-black hover:bg-red-500 font-semibold text-lg transition-all duration-500 ml-4" style={{ borderRadius: '10px 0px 10px 10px' }}>
                                    <Link to={`/learn/#books`}>Courses</Link>
                                </button>
                                <button className="bg-[#202839] xl:px-20 px-12 text-white xl:py-5 lg:py-3 hover:text-black hover:bg-red-500 font-semibold text-lg transition-all duration-500 lg:block hidden" style={{ borderRadius: '10px 0px 10px 10px' }}>
                                    <Link to={`/learn/#books`}>Free Guides</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearnBanner;