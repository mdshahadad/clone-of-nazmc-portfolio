import { Link } from "react-router";
import LearnCard from "../../HomeComponent/Home/LearnHome/LearnCard";
import LearnHome from "../../HomeComponent/Home/LearnHome/LearnHome";
import NewspaperShow from "../../HomeComponent/Home/NewspaperShow/NewspaperShow";
import LearnBanner from "../LearnBanner/LearnBanner";
import ElevateMarketing from "../ElevateMarketing/ElevateMarketing";
import Testimonials from "../Testimonials/Testimonials";

const Learn = () => {
    return (
        <section className="pt-16">
            <LearnBanner></LearnBanner>
            <NewspaperShow></NewspaperShow>
            <div id="#books" className="pb-20">
                <div className='flex justify-between items-center 2xl:px-[350px]
             xl:px-12 px-5 pb-16'>
                    <div className='text-[#202839] space-y-4'>
                        <h4 className="text-xl font-semibold"><span className="text-red-500">Marketing</span> Mastery</h4>
                        <h2 className='2xl:text-5xl xl:text-4xl lg:text-3xl font-bold'>Courses, Books And Trainings</h2>
                        <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, distinctio?</p>
                    </div>
                    <div>
                        <button className='border-2 border-violet-600 px-12 py-4 font-semibold text-lg text-[#202839]' style={{ borderRadius: '8px 0px 8px 8px' }}>
                            <Link to={'/consulting'}>See More Courses</Link>
                        </button>
                    </div>
                </div>
                <LearnCard></LearnCard>
            </div>
            <ElevateMarketing></ElevateMarketing>
            <Testimonials></Testimonials>
        </section>
    );
};

export default Learn;