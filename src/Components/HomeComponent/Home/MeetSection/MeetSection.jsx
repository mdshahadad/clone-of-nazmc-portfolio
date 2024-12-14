import './MeetSection.css'

const MeetSection = () => {
    return (
        <section className='meet-image lg:my-16 my-10 h-[1200px] relative'>
            <div className='lg:px-96'>
                <div className="flex justify-center mb-8">
                    <h2 className="text-[#242f3e] font-bold lg:text-5xl text-2xl text-center lg:my-20 my-10">Meet <span className='text-red-500'>Shahadad</span> Hossain - </h2>
                </div>
                <div className='lg:flex items-start justify-between mx-4'>
                    <div>
                        <div>
                            <img src="https://nazmc.com/wp-content/uploads/2024/07/01.svg" alt="" />
                            <p className='flex-wrap lg:w-96 w-[320px] lg:text-lg text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet tempora eaque quae, aut beatae temporibus, <strong>veritatis dignissimos</strong> fugit rerum unde facilis impedit, tempore fugiat modi sapiente. Ea illo libero odio.</p>
                        </div>
                        <div className='bg-white lg:px-14 lg:py-8 py-4 absolute lg:left-[550px] lg:mt-24 mt-12 left-10 px-4'>
                            <img src="https://nazmc.com/wp-content/uploads/2024/07/02.svg" alt="" />
                            <p className='flex-wrap lg:w-96 lg:text-lg text-sm'>Lorem ipsum <strong>dolor sit amet, consectetur adipisicing</strong> elit. Eveniet tempora eaque quae, aut beatae temporibus, veritatis dignissimos fugit rerum unde facilis impedit, tempore fugiat modi sapiente. Ea illo libero odio.</p>
                        </div>
                    </div>
                    <div className='lg:block flex justify-center'>
                        <img className='bg-amber-500 rounded-full w-80 h-80 lg:w-[700px] lg:mt-0 mt-80' src="https://i.postimg.cc/xdDSkvJ5/Banner-Img-without-bg-2.png" alt="" />
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className='absolute lg:-bottom-16 flex lg:gap-5 gap-2 mx-2'>
                        <div className='bg-[#2b354c] text-white lg:w-64 lg:px-4 px-2 lg:py-5 py-2 space-y-2' style={{ borderRadius: '10px 0px 10px 10px' }}>
                            <h2 className='lg:text-5xl text-xl font-bold'>5+</h2>
                            <p className='lg:text-xl text-sm'>Lorem ipsum dolor, sit amet consectetur</p>
                        </div>
                        <div className='bg-[#2b354c] text-white lg:w-64 lg:px-4 px-2 lg:py-5 py-2 space-y-2' style={{ borderRadius: '10px 0px 10px 10px' }}>
                            <h2 className='lg:text-5xl text-xl font-bold'>5+</h2>
                            <p className='lg:text-xl text-sm'>Lorem ipsum dolor, sit amet consectetur</p>
                        </div>
                        <div className='bg-[#2b354c] text-white lg:w-64 lg:px-4 px-2 lg:py-5 py-2 space-y-2' style={{ borderRadius: '10px 0px 10px 10px' }}>
                            <h2 className='lg:text-5xl text-xl font-bold'>5+</h2>
                            <p className='lg:text-xl text-sm'>Lorem ipsum dolor, sit amet consectetur</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MeetSection;