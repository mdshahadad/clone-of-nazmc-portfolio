import '../ConsultingBanner/Consulting.css'

const TrustedCompany = () => {
    return (
        <section className='py-20'>
            <div className='flex justify-center'>
                <div className='trusted-bg-image h-80'>
                    <div className='flex justify-center'>
                        <h2 className='text-4xl font-bold text-[#202839] text-center w-2/3'>Trusted By Founders At 200+ Companies As Their Part-Time CMO, Including</h2>
                    </div>
                    <div className='grid grid-cols-4 px-16'>
                        <div>
                            <img className='w-[300px] h-[280px] scale-75' src="https://nazmc.com/wp-content/uploads/2023/12/pipeline-signals.webp" alt="" />
                        </div>
                        <div>
                            <img className='w-[300px] h-[280px] scale-50' src="https://nazmc.com/wp-content/uploads/2023/12/brainstation23-450x450.webp" alt="" />
                        </div>
                        <div>
                            <img className='w-[300px] h-[280px] scale-75' src="https://nazmc.com/wp-content/uploads/2023/12/one-little-web-450x276.webp" alt="" />
                        </div>
                        <div>
                            <img className='w-[300px] h-[280px] scale-75' src="https://nazmc.com/wp-content/uploads/2023/12/sheba-450x450.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedCompany;