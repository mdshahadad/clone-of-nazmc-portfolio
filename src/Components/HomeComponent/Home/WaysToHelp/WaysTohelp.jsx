import React from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import { GoArrowUpRight } from 'react-icons/go';
import { PiGraduationCap } from 'react-icons/pi';

const WaysTohelp = () => {
    return (
        <section className='max-w-5xl mx-auto lg:px-4'>
            <div className='flex justify-between gap-8 items-center'>
                <div className='flex gap-4'>
                    <img className='w-36' src="https://nazmc.com/wp-content/uploads/2023/12/2-450x634.webp" alt="" />
                    <div>
                        <h2 className='font-bold text-4xl my-8 text-[#242f3e]'>Ways We Can Help You</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore asperiores dolorum praesentium dicta corporis quasi fugiat nemo illum recusandae ducimus modi, voluptate tempore voluptas corrupti dignissimos similique porro, consequatur nam!</p>
                    </div>
                </div>
                <div className='w-full space-y-10'>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <FiMessageCircle className='text-4xl' />
                            <h4 className='font-bold text-xl'>1-To-1 Consulting</h4>
                        </div>
                        <GoArrowUpRight className='text-3xl' />
                    </div>
                    <div className='flex justify-between items-center'>
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