import { Link } from "react-router";

const BannerText = () => {
    return (
        <div className="text-white space-y-4 pt-8">
            <h1 className="2xl:text-[60px] xl:text-[54px] text-[42px] xl:leading-[62px] lg:leading-[48px] font-bold">Grow Your <span className="text-red-500">Business</span> And <br /> <span className="text-red-500">Skills</span> In Web Development</h1>
            <p className="xl:text-xl lg:text-lg">Get More Customers, Increase Your Revenue, and Advance Your <br /> Marketing Growth</p>
            <div className="flex gap-4">
                <Link to={"/learn"}>
                    <button className="bg-white 2xl:py-6 xl:py-5 2xl:px-14 xl:px-10 text-black font-semibold mr-2 border-[1px] border-white hover:bg-[#E8274A] hover:text-white transition-all duration-500 2xl:text-xl xl:text-lg" style={{ borderRadius: '10px 2px 10px 10px' }}>
                        View Courses
                    </button>
                </Link>

                <Link to={"/consulting"}>
                    <button className="bg-transparent 2xl:py-6 xl:py-5 2xl:px-14 xl:px-10 text-white font-semibold mr-2 border-[1px] border-white hover:bg-[#E8274A] hover:text-white transition-all duration-500  2xl:text-xl xl:text-lg" style={{ borderRadius: '10px 2px 10px 10px' }}>
                        1 to 1 Consulting
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BannerText;