import React from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import { GoArrowUpRight } from 'react-icons/go';
import { PiGraduationCap } from 'react-icons/pi';

const WaysTohelp = () => {
    return (
        <section className='lg:max-w-5xl lg:mx-auto lg:px-4 mx-4 py-10 lg:mt-0'>
            <div className='lg:flex justify-between gap-8 items-center'>
                <div className='lg:flex lg:gap-4 lg:space-y-0 space-y-4'>
                    <img className='lg:w-36 w-28' src="https://nazmc.com/wp-content/uploads/2023/12/2-450x634.webp" alt="" />
                    <div className='lg:space-y-0 space-y-4'>
                        <h2 className='font-bold lg:text-4xl text-2xl lg:my-8 text-[#242f3e]'>Ways We Can Help You</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore asperiores dolorum praesentium dicta corporis quasi fugiat nemo illum recusandae ducimus modi, voluptate tempore voluptas corrupti dignissimos similique porro, consequatur nam!</p>
                    </div>
                </div>
                <div className='w-full lg:space-y-10 space-y-5 my-8'>
                    <div className='flex justify-between items-center lg:bg-transparent bg-[#202839] lg:text-[#202839] text-white px-4 py-4 rounded-md'>
                        <div className='flex gap-2 items-center'>
                            <FiMessageCircle className='text-4xl' />
                            <h4 className='font-bold text-xl'>1-To-1 Consulting</h4>
                        </div>
                        <GoArrowUpRight className='text-3xl' />
                    </div>
                    <div className='flex justify-between items-center lg:bg-transparent bg-[#202839] lg:text-[#202839] text-white px-4 py-5 rounded-md'>
                        <div className='flex gap-4 items-center'>
                            <PiGraduationCap className='text-3xl' />
                            <h4 className='font-bold text-xl'>Courses And Training</h4>
                        </div>
                        <GoArrowUpRight className='text-3xl' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WaysTohelp;