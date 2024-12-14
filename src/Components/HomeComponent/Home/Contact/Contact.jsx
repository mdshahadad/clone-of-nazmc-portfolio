import { Link } from "react-router";

const Contact = () => {
    return (
        <section className="bg-[#f5e9eb]">
            <div className="lg:py-20 py-14">
                <div className="flex justify-center">
                    <div className="text-center">
                        <h4 className="lg:text-2xl text-lg font-semibold">Not Sure where to Start?</h4>
                        <h2 className="lg:text-5xl text-2xl font-bold py-4">Lorem ipsum dolor sit <br /> amet consectetur!</h2>
                    </div>
                </div>
                <div className="flex justify-center py-8 text-white font-semibold mx-4 lg:mx-0">
                    <div className="lg:flex gap-4 xl:w-3/5 lg:w-4/5  w-full lg:space-y-0 space-y-4">
                        <button className="uppercase bg-[#E54444] lg:px-4 px-12 py-5 text-lg hover:bg-white hover:text-[#E54444] border-[1px] border-[#E54444] lg:w-1/2 w-full" style={{ borderRadius: '10px 0px 10px 10px' }}>
                            <Link>I'm a founder</Link>
                        </button>
                        <button className="uppercase bg-white border-[1px] border-[#E54444] text-[#E54444] hover:bg-[#E54444] hover:text-white lg:px-4 px-12 py-5 text-lg  lg:w-1/2 w-full" style={{ borderRadius: '10px 0px 10px 10px' }}>
                            <Link>I'm a marketer</Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;