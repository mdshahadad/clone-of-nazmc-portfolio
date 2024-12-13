import { Link } from 'react-router';
import './Consulting.css'
import CourseCard from './CourseCard';

const ConsultingCourse = () => {
    return (
        <section className='consulting_gradient py-20'>
            <div className='flex justify-between items-center 2xl:px-72
             xl:px-12 px-5 pb-8'>
                <div className='text-white space-y-4'>
                    <h2 className='2xl:text-5xl xl:text-4xl lg:text-3xl font-bold'>One-To-One Consulting</h2>
                    <p className='text-xl'>I help founders enhance their marketing teams for business growth</p>
                </div>
                <div>
                    <button className='border-2 border-white px-12
                     py-4 font-semibold text-lg text-white' style={{ borderRadius: '8px 0px 8px 8px' }}>
                        <Link to={'/consulting'}>See More Services</Link>
                    </button>
                </div>
            </div>
            <CourseCard></CourseCard>
        </section>
    );
};

export default ConsultingCourse;