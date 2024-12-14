import { Link } from "react-router";

const BookingCalendar = () => {
    return (
        <section className="mx-96 space-y-16 py-20">
            <div className="flex w-3/5 mx-auto">
                <div className="text-center space-y-5">
                    <h2 className="font-bold text-4xl">Limited Availability: I Can Serve <br /> <span className="text-[#ed2849]">Only 7 Clients A Month</span></h2>
                    <p className="text-xl leading-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis odit officiis quam illum eaque qui eos ratione cum amet hic?</p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="space-y-4">
                    <img className="w-[800px]" src="https://nazmc.com/wp-content/uploads/2023/12/consulting-schedule-2021.svg" alt="" />
                    <h4 className="text-xl text-[#202839] font-medium text-center">Each Plan is Specifically Designed to Achieve Specific goals</h4>
                    <div className="flex justify-center gap-5">
                        <img src="https://nazmc.com/wp-content/uploads/2023/12/See-here.svg" alt="" />
                        <div className="pt-10">
                            <Link>
                                <button className="px-8 py-4 bg-[#202839] text-white font-medium" style={{ borderRadius: '12px 0px 12px 12px' }}>
                                    Book Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingCalendar;