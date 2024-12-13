import './MeetSection.css'

const MeetSection = () => {
    return (
        <section className='meet-image my-16 h-[1200px] relative'>
            <div className='px-96'>
                <div className="flex justify-center mb-8">
                    <h2 className="text-[#242f3e] font-bold text-5xl text-center my-20">Meet <span className='text-red-500'>Shahadad</span> Hossain - <br className="xl:block lg:hidden" /> </h2>
                </div>
                <div className='flex items-start justify-between'>
                    <div>
                        <div>
                            <img src="https://nazmc.com/wp-content/uploads/2024/07/01.svg" alt="" />
                            <p className='flex-wrap w-96'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet tempora eaque quae, aut beatae temporibus, <strong>veritatis dignissimos</strong> fugit rerum unde facilis impedit, tempore fugiat modi sapiente. Ea illo libero odio.</p>
                        </div>
                        <div className='bg-white px-14 py-8 absolute left-[550px] mt-24'>
                            <img src="https://nazmc.com/wp-content/uploads/2024/07/02.svg" alt="" />
                            <p className='flex-wrap w-96'>Lorem ipsum <strong>dolor sit amet, consectetur adipisicing</strong> elit. Eveniet tempora eaque quae, aut beatae temporibus, veritatis dignissimos fugit rerum unde facilis impedit, tempore fugiat modi sapiente. Ea illo libero odio.</p>
                        </div>
                    </div>
                    <div>
                        <img className='bg-amber-500 rounded-full w-[700px]' src="https://i.postimg.cc/xdDSkvJ5/Banner-Img-without-bg-2.png" alt="" />
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className='absolute -bottom-16 flex gap-5'>
                        <div className='bg-[#2b354c] text-white w-64 px-4 py-5 space-y-2' style={{ borderRadius: '10px 0px 10px 10px' }}>
                            <h2 className='text-5xl font-bold'>5+</h2>
                            <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur</p>
                        </div>
                        <div className='bg-[#2b354c] text-white w-64 px-4 py-5 space-y-2' style={{ borderRadius: '10px 0px 10px 10px' }}>
                            <h2 className='text-5xl font-bold'>5+</h2>
                            <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur</p>
                        </div>
                        <div className='bg-[#2b354c] text-white w-64 px-4 py-5 space-y-2' style={{ borderRadius: '10px 0px 10px 10px' }}>
                            <h2 className='text-5xl font-bold'>5+</h2>
                            <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MeetSection;