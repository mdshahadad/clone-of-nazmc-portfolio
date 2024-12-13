import { Link } from "react-router";

const BannerText = () => {
    return (
        <div className="text-white space-y-4 pt-8">
            <h1 className="text-[54px] leading-[62px] font-bold">Grow Your <span className="text-red-500">Business</span> And <br /> <span className="text-red-500">Skills</span> In Web Development</h1>
            <p className="text-xl">Get More Customers, Increase Your Revenue, and Advance Your <br /> Marketing Growth</p>
            <div className="flex">
                <button className="bg-white py-5 px-10 text-black font-semibold mr-2 border-[1px] border-white hover:bg-[#E8274A] hover:text-white transition-all duration-500" style={{ borderRadius: '10px 2px 10px 10px' }}>
                    <Link>View Courses</Link>
                </button>
                <button className="bg-transparent py-5 px-10 text-white font-semibold mr-2 border-[1px] border-white hover:bg-[#E8274A] hover:text-white transition-all duration-500" style={{ borderRadius: '10px 2px 10px 10px' }}>
                    <Link>1 to 1 Consulting</Link>
                </button>
            </div>
        </div>
    );
};

export default BannerText;