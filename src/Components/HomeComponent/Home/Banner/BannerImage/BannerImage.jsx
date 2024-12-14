import { Link } from "react-router";

const BannerImage = () => {
    return (
        <div className="relative">
            <div>
                <img className="xl:w-[570px] lg:w-[450px]" src={`https://i.postimg.cc/xdDSkvJ5/Banner-Img-without-bg-2.png`} alt="" />
                <div className="flex lg:gap-5 gap-2 absolute lg:-bottom-24 -bottom-10 right-0 mx-2">
                    <div className="bg-white xl:py-4 lg:py-3 py-2 px-2 xl:w-[200px] lg:w-[170px] space-y-2 flex xl:items-center lg:items-start" style={{ borderRadius: '10px 2px 10px 10px' }}>
                        <div className="space-y-2">
                            <h3 className="xl:text-5xl lg:text-3xl text-xl font-bold text-[#E54444]">1+</h3>
                            <p className="text-xs">Years experience in <br /> Developing</p>
                        </div>
                    </div>
                    <div className="bg-[#E54444] xl:py-4 lg:py-3 py-2 px-2 xl:w-[200px] lg:w-[170px] space-y-2 text-white flex xl:items-center lg:items-start" style={{ borderRadius: '10px 2px 10px 10px' }}>
                        <div className="space-y-2">
                            <h3 className="xl:text-5xl lg:text-3xl text-xl font-bold">2M+</h3>
                            <p className="text-xs">Views on Social Media <br /> & Youtube Channel</p>
                        </div>
                    </div>
                    <div className="bg-white xl:py-4 lg:py-3 py-2 px-2 xl:w-[200px] lg:w-[170px] space-y-2 flex  lg:items-start" style={{ borderRadius: '10px 2px 10px 10px' }}>
                        <div className="space-y-2">
                            <h3 className="xl:text-5xl lg:text-3xl text-xl font-bold text-[#E54444]">10+</h3>
                            <p className="text-xs">Project Completed</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:hidden block absolute -bottom-48 space-y-4">
                <p className="xl:text-xl lg:text-lg lg:block text-white text-center text-base">Get More Customers, Increase Your Revenue, and Advance Your <br className="lg:block hidden" /> Marketing Growth</p>
                <div className="flex justify-center">
                    <div className="lg:flex gap-4">
                        <Link to={"/learn"}>
                            <button className="bg-white 2xl:py-6 xl:py-5 2xl:px-14 xl:px-10 py-4 px-7 text-black font-semibold mr-2 border-[1px] border-white hover:bg-[#E8274A] hover:text-white transition-all duration-500 2xl:text-xl xl:text-lg" style={{ borderRadius: '10px 2px 10px 10px' }}>
                                View Courses
                            </button>
                        </Link>

                        <Link to={"/consulting"}>
                            <button className="bg-transparent 2xl:py-6 xl:py-5 2xl:px-14 py-4 px-7 xl:px-10 text-white font-semibold mr-2 border-[1px] border-white hover:bg-[#E8274A] hover:text-white transition-all duration-500  2xl:text-xl xl:text-lg" style={{ borderRadius: '10px 2px 10px 10px' }}>
                                1 to 1 Consulting
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerImage;