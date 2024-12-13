import { Link } from "react-router";
import LearnCard from "../../HomeComponent/Home/LearnHome/LearnCard";
import LearnHome from "../../HomeComponent/Home/LearnHome/LearnHome";
import NewspaperShow from "../../HomeComponent/Home/NewspaperShow/NewspaperShow";
import LearnBanner from "../LearnBanner/LearnBanner";

const Learn = () => {
    return (
        <section>
            <LearnBanner></LearnBanner>
            <NewspaperShow></NewspaperShow>
            <div id="#books">
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
        </section>
    );
};

export default Learn;