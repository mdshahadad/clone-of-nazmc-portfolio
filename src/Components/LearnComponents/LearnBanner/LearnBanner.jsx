import { Link } from "react-router";

const LearnBanner = () => {
    return (
        <section className="pb-20">
            <div className="flex justify-between items-center px-80">
                <div className="text-[#202839] space-y-4">
                    <h4 className="text-xl font-medium">Learn <span className="text-red-500">with</span> Nazmul</h4>
                    <h2 className="text-6xl font-bold">Web Developing <br /> <span className="text-red-500">Courses</span> And Resources</h2>
                    <div className="flex gap-4 pt-10">
                        <button className="bg-[#202839] px-20 text-white py-5 hover:text-black hover:bg-red-500 font-semibold text-lg transition-all duration-500" style={{ borderRadius: '10px 0px 10px 10px' }}>
                            <Link to={`/learn/#books`}>Book</Link>
                        </button>
                        <button className="bg-[#202839] px-16 text-white py-5 hover:text-black hover:bg-red-500 font-semibold text-lg transition-all duration-500" style={{ borderRadius: '10px 0px 10px 10px' }}>
                            <Link to={`/learn/#books`}>Courses</Link>
                        </button>
                        <button className="bg-[#202839] px-16 text-white py-5 hover:text-black hover:bg-red-500 font-semibold text-lg transition-all duration-500" style={{ borderRadius: '10px 0px 10px 10px' }}>
                            <Link to={`/learn/#books`}>Free Guides</Link>
                        </button>
                    </div>
                </div>
                <div className="relative">
                    <img className="xl:w-[570px] lg:w-[450px]" src={`https://i.postimg.cc/xdDSkvJ5/Banner-Img-without-bg-2.png`} alt="" />
                    <div className="flex gap-5 absolute -bottom-24 right-0">
                        <div className="bg-[#E54444] text-white xl:py-4 lg:py-3 px-4 xl:w-[200px] lg:w-[170px] space-y-2 flex xl:items-center lg:items-start" style={{ borderRadius: '10px 2px 10px 10px' }}>
                            <div className="space-y-2">
                                <h3 className="xl:text-5xl lg:text-3xl font-bold">2+</h3>
                                <p>Years experience in <br /> Developing</p>
                            </div>
                        </div>
                        <div className="bg-[#202839] xl:py-4 lg:py-3 px-4 xl:w-[200px] lg:w-[170px] space-y-2 text-white flex xl:items-center lg:items-start" style={{ borderRadius: '10px 2px 10px 10px' }}>
                            <div className="space-y-2">
                                <h3 className="xl:text-5xl lg:text-3xl font-bold">1M+</h3>
                                <p>Views on Social Media <br /> & Youtube Channel</p>
                            </div>
                        </div>
                        <div className="bg-[#E54444] text-white xl:py-4 lg:py-3 px-4 xl:w-[200px] lg:w-[170px] space-y-2 flex  lg:items-start" style={{ borderRadius: '10px 2px 10px 10px' }}>
                            <div className="space-y-2">
                                <h3 className="xl:text-5xl lg:text-3xl font-bold">20+</h3>
                                <p>Project Completed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearnBanner;