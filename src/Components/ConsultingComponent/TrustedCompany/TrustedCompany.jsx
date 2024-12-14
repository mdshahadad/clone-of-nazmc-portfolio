import '../ConsultingBanner/Consulting.css'

const TrustedCompany = () => {
    return (
        <section className='lg:py-20 py-12'>
            <div className='flex justify-center'>
                <div className='trusted-bg-image lg:h-80 lg:h-[600px]'>
                    <div className='flex justify-center'>
                        <h2 className='lg:text-4xl text-2xl font-bold text-[#202839] text-center lg:w-2/3'>Trusted By Founders At 200+ Companies As Their Part-Time CMO, Including</h2>
                    </div>
                    <div className='grid lg:grid-cols-4 grid-cols-2 xl:px-16'>
                        <div>
                            <img className='lg:w-[300px] h-40 lg:h-[280px] scale-75' src="https://nazmc.com/wp-content/uploads/2023/12/pipeline-signals.webp" alt="" />
                        </div>
                        <div>
                            <img className='lg:w-[300px] h-40 lg:h-[280px] scale-50' src="https://nazmc.com/wp-content/uploads/2023/12/brainstation23-450x450.webp" alt="" />
                        </div>
                        <div>
                            <img className='w-[300px] h-40 lg:h-[280px] scale-75' src="https://nazmc.com/wp-content/uploads/2023/12/one-little-web-450x276.webp" alt="" />
                        </div>
                        <div>
                            <img className='w-[300px] h-40 lg:h-[280px] scale-75' src="https://nazmc.com/wp-content/uploads/2023/12/sheba-450x450.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedCompany;