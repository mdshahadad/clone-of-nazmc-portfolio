import { Link } from "react-router";

const Contact = () => {
    return (
        <section className="bg-[#f5e9eb]">
            <div className="py-20">
                <div className="flex justify-center">
                    <div className="text-center">
                        <h4 className="text-2xl font-semibold">Not Sure where to Start?</h4>
                        <h2 className="text-5xl font-bold py-4">Lorem ipsum dolor sit <br /> amet consectetur!</h2>
                    </div>
                </div>
                <div className="flex justify-center py-8 text-white font-semibold">
                    <div className="flex gap-4">
                        <button className="uppercase bg-[#E54444] px-12 py-5 text-lg hover:bg-white hover:text-[#E54444] border-[1px] border-[#E54444]" style={{ borderRadius: '10px 0px 10px 10px' }}>
                            <Link>I'm a founder</Link>
                        </button>
                        <button className="uppercase bg-white border-[1px] border-[#E54444] text-[#E54444] hover:bg-[#E54444] hover:text-white px-12 py-5 text-lg" style={{ borderRadius: '10px 0px 10px 10px' }}>
                            <Link>I'm a marketer</Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;