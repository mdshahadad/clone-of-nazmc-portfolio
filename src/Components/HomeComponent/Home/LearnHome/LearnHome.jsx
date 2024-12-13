import { Link } from "react-router";
import LearnCard from "./LearnCard";

const LearnHome = () => {
    return (
        <section className='bg-[#202839] py-20'>
            <div className='flex justify-between items-center 2xl:px-[350px]
             xl:px-12 px-5 pb-16'>
                <div className='text-white space-y-4'>
                    <h2 className='2xl:text-5xl xl:text-4xl lg:text-3xl font-bold'>Courses, Books And Trainings</h2>
                    <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, distinctio?</p>
                </div>
                <div>
                    <button className='border-2 border-violet-600 px-12 py-4 font-semibold text-lg text-white' style={{ borderRadius: '8px 0px 8px 8px' }}>
                        <Link to={'/consulting'}>See More Courses</Link>
                    </button>
                </div>
            </div>
            <LearnCard></LearnCard>
        </section>
    );
};

export default LearnHome;