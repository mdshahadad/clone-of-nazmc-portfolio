import { FaMoneyBillWave } from 'react-icons/fa';
import './Marketing.css'
import { PiClockCountdownFill } from 'react-icons/pi';
import { Link } from 'react-router';

const MarketingAudit = () => {
    return (
        <section className='2xl:w-[60%] lg:w-[90%] mx-auto'>
            <section className='marketing-banner h-[780px]'>
                <div className='flex justify-center pt-56 gap-8'>
                    <div>
                        <img className='mt-8 w-[550px]' src="https://nazmc.com/wp-content/uploads/2024/11/audit-1.webp" alt="" />
                    </div>
                    <div className='text-[#202839] space-y-5'>
                        <h2 className='text-5xl font-bold text-center'>Marketing Audit Service For <span className='text-[#ed2849]'>Your</span> Business</h2>
                        <p className='font-medium text-lg text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, cum ratione inventore voluptate qui recusandae sunt aspernatur magnam? Alias.</p>
                        <div className='flex justify-center gap-8'>
                            <div className='flex items-center'>
                                <PiClockCountdownFill className='text-[#202839] text-3xl mr-4' />
                                <p className='font-medium text-lg'>6 Hours (One Time)</p>
                            </div>
                            <div className='flex items-center'>
                                <FaMoneyBillWave className='text-[#202839] text-3xl mr-4' />
                                <p className='font-medium text-lg'>Starting At 999+ Taka</p>
                            </div>
                        </div>
                        <div className='flex gap-4 justify-center'>
                            <Link>
                                <button className="px-8 py-4 bg-[#202839] text-white font-medium text-lg" style={{ borderRadius: '12px 0px 12px 12px' }}>
                                    Explore How
                                </button>
                            </Link>
                            <Link>
                                <button className="px-8 py-4 text-[#202839] bg-white border-[#202839] border-[1px] font-medium text-lg" style={{ borderRadius: '12px 0px 12px 12px' }}>
                                    See Plans
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img className='mt-28' src="https://nazmc.com/wp-content/uploads/2024/11/audit-2.webp" alt="" />
                    </div>
                </div>
            </section>
        </section>
    );
};

export default MarketingAudit;