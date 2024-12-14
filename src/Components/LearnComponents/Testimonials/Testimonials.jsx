import React from 'react';

const Testimonials = () => {
    return (
        <section className='py-20 lg:px-8'>

            <div className='flex justify-center'>
                <div>
                    <div className='flex justify-center'>
                        <div className='text-center space-y-4 mb-8'>
                            <h2 className='lg:text-5xl text-3xl font-bold text-[#202839]'>Testimonials</h2>
                            <p className='lg:w-2/3 w-full mx-auto lg:text-xl text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima minus totam odit error sunt eius provident nam molestiae fugit corporis.</p>
                        </div>
                    </div>
                    <div>
                        <img className='scale-90' src="https://nazmc.com/wp-content/uploads/2023/12/people-testimonials.svg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;