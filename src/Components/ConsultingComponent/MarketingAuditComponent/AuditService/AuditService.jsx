import { PiClockCountdownFill } from 'react-icons/pi';
import '../Marketing.css'
import { FaMoneyBillWave } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';
import { Link } from 'react-router';

const AuditService = () => {
    return (
        <div className='pt-40 relative'>
            <section className='2xl:w-[60%] xl:w-[80%] lg:w-[90%] mx-auto'>
                <div className='audit-bg-image h-[1720px] border-2 border-[#202839] rounded-lg'>
                    <div className='flex justify-center'>
                        <img className='absolute top-20 scale-90 bg-white px-8' src="https://nazmc.com/wp-content/uploads/2024/11/marketing-audit-450x196.webp" alt="" />
                    </div>
                    <section className='pt-48 space-y-8'>
                        <div className='flex justify-center gap-40'>
                            <div className='flex items-center'>
                                <PiClockCountdownFill className='text-yellow-400 text-4xl mr-4' />
                                <p className='text-xl'><strong>Time: </strong>6 Hours (One Time)</p>
                            </div>
                            <div className='flex items-center'>
                                <FaMoneyBillWave className='text-blue-400 text-4xl mr-4' />
                                <p className='text-xl'><strong>Investment:</strong>Starting At 999+ Taka</p>
                            </div>
                        </div>
                        <div className='ml-20 space-y-5'>
                            <p className='text-xl'><strong>Frequency:</strong> One Time</p>
                            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, placeat!</p>
                        </div>
                        <div className='bg-[#202839]'>
                            <h4 className='text-xl text-white text-center font-semibold py-2'>Marketing Audit Service</h4>
                        </div>
                    </section>
                    <section>
                        <div className='mx-16 pt-4'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-4'>
                                    <img className='w-8' src="../../../../../public/images/discover.jpg" alt="" />
                                    <div className='mt-5 space-y-2'>
                                        <h3 className='text-2xl font-semibold'>Discovery and Goal Setting</h3>
                                        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, doloribus?</p>
                                    </div>
                                </div>
                                <div>
                                    <MdDone className='text-red-500 text-5xl font-bold' />
                                </div>
                            </div>
                            <hr className='mt-8' />
                        </div>
                        <div className='mx-16 pt-4'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-4'>
                                    <img className='w-8' src="../../../../../public/images/computer.jpg" alt="" />
                                    <div className='mt-5 space-y-2'>
                                        <h3 className='text-2xl font-semibold'>Discovery and Goal Setting</h3>
                                        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, doloribus?</p>
                                    </div>
                                </div>
                                <div>
                                    <MdDone className='text-red-500 text-5xl font-bold' />
                                </div>
                            </div>
                            <hr className='mt-8' />
                        </div>
                        <div className='mx-16 pt-4'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-4'>
                                    <img className='w-8' src="../../../../../public/images/support.jpg" alt="" />
                                    <div className='mt-5 space-y-2'>
                                        <h3 className='text-2xl font-semibold'>Discovery and Goal Setting</h3>
                                        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, doloribus?</p>
                                    </div>
                                </div>
                                <div>
                                    <MdDone className='text-red-500 text-5xl font-bold' />
                                </div>
                            </div>
                            <hr className='mt-8' />
                        </div>
                        <div className='mx-16 pt-4'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-4'>
                                    <img className='w-8' src="../../../../../public/images/evaluation.jpg" alt="" />
                                    <div className='mt-5 space-y-2'>
                                        <h3 className='text-2xl font-semibold'>Discovery and Goal Setting</h3>
                                        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, doloribus?</p>
                                    </div>
                                </div>
                                <div>
                                    <MdDone className='text-red-500 text-5xl font-bold' />
                                </div>
                            </div>
                            <hr className='mt-8' />
                        </div>
                        <div className='mx-16 pt-4'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-4'>
                                    <img className='w-8' src="../../../../../public/images/actional.jpg" alt="" />
                                    <div className='mt-5 space-y-2'>
                                        <h3 className='text-2xl font-semibold'>Discovery and Goal Setting</h3>
                                        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, doloribus?</p>
                                    </div>
                                </div>
                                <div>
                                    <MdDone className='text-red-500 text-5xl font-bold' />
                                </div>
                            </div>
                            <hr className='mt-8' />
                        </div>
                    </section>
                    <section className='py-16'>
                        <div>
                            <h2 className='text-4xl text-center font-bold'>Book A <span className='text-red-500'>Meeting</span></h2>
                            <hr className='mx-28 mt-5 border-2 border-red-500' />
                        </div>
                        <div className='mx-28 mt-12
                        '>
                            <form action="">
                                <div className='space-y-12'>
                                    <div className='flex justify-center w-full gap-12'>
                                        <div className='w-full'>
                                            <input className='border-2 px-4 py-3 w-full border-[#202839] focus:ring-0 focus:border-gray-500 focus:outline-1 focus:outline-gray-500 rounded-md bg-gray-100' type="text" name="name" placeholder='Name*' id="" />
                                        </div>
                                        <div className='w-full'>
                                            <input className='border-2 px-4 py-3 w-full border-[#202839] focus:ring-0 focus:border-gray-500 focus:outline-1 focus:outline-gray-500 rounded-md bg-gray-100' type="phone" name="Phone" placeholder='Phone*' id="" />
                                        </div>
                                    </div>
                                    <div className='flex justify-center w-full gap-12'>
                                        <div className='w-full'>
                                            <input className='border-2 px-4 py-3 w-full border-[#202839] focus:ring-0 focus:border-gray-500 focus:outline-1 focus:outline-gray-500 rounded-md bg-gray-100' type="email" name="email" placeholder='Email*' id="" />
                                        </div>
                                        <div className='w-full'>
                                            <input className='border-2 px-4 py-3 w-full border-[#202839] focus:ring-0 focus:border-gray-500 focus:outline-1 focus:outline-gray-500 rounded-md bg-gray-100' type="text" name="name" placeholder='Website Link*' id="" />
                                        </div>
                                    </div>
                                    <div className='flex justify-center w-full gap-12 items-center'>
                                        <div className='w-full'>
                                            <textarea className='border-2 px-4 py-3 w-full border-[#202839] focus:ring-0 focus:border-gray-500 focus:outline-1 focus:outline-gray-500 rounded-md' name="details" id="" placeholder='Where can I Help You the Most?'></textarea>
                                        </div>
                                        <div className='w-full'>
                                            <Link>
                                                <button className='bg-[#202839] text-white font-semibold text-xl w-full py-4 rounded-md'>
                                                    Sent Consultation Request
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
};

export default AuditService;