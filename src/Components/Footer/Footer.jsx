import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-[#202839] text-white w-full">
            <section className="py-16 lg:px-10 px-0 w-full">
                <div className="lg:block flex justify-center">
                    <section className="lg:flex 2xl:justify-evenly lg:justify-between items-start 2xl:px-80 xl:px-52 px-0 space-y-8">
                        <div>
                            <img className="bg-amber-600 rounded-3xl 2xl:w-96 xl:w-72 lg:w-60 lg:h-60 xl:h-72 2xl:h-96 w-72" src="https://i.postimg.cc/xdDSkvJ5/Banner-Img-without-bg-2.png" alt="" />
                            <div>
                                <h4 className="text-xl font-semibold py-2">Shahadad Hossain</h4>
                                <p>Lorem ipsum dolor, sit amet <br className="lg:block xl:hidden" /> consectetur <br className="xl:block lg:hidden" /> adipisicing elit. Iusto,</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-2xl font-semibold py-2">Services</h4>
                            <ul className="flex flex-col space-y-1 text-lg">
                                <Link>Marketing Audit</Link>
                                <Link>Marketing Advisor</Link>
                                <Link>Build A Marketing Team</Link>
                                <Link>Part-Time CMO</Link>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-2xl font-semibold py-2">Quick Links</h4>
                            <ul className="flex flex-col space-y-1 text-lg">
                                <Link>Career</Link>
                                <Link>Courses</Link>
                                <Link>Refund Policy</Link>
                                <Link>Terms and Conditions</Link>
                                <Link>Courses</Link>
                                <Link>Refund Policy</Link>
                                <Link>Terms and Conditions</Link>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold py-2">Resources</h4>
                            <ul>
                                <li>Career</li>
                                <li>Courses</li>
                                <li>Refund Policy</li>
                                <li>Support</li>
                                <li>Client Success</li>
                                <li>Terms and Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                            <div>
                                <h4 className="text-xl font-semibold py-4">Let's Connect</h4>
                                <div className="flex gap-2 items-center">
                                    <Link to={`https://www.facebook.com/`}><FaFacebook className="text-2xl" /></Link>
                                    <Link to={`https://www.facebook.com/`}><FaInstagram className="text-2xl" /></Link>
                                    <Link to={`https://www.facebook.com/`}><FaLinkedin className="text-2xl" /></Link>
                                    <Link to={`https://www.facebook.com/`}><FaXTwitter className="text-2xl" /></Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="lg:flex 2xl:mx-[440px] xl:mx-52 lg:mx-12 mx-5">
                    <div>
                        <img className="lg:w-3/4 w-full mx-auto py-10" src="https://nazmc.com/wp-content/uploads/2023/12/SSLCOMMERZ-Pay-With-logo-All-Size_Aug-21-05-1536x55.png" alt="" />
                        <hr />
                        <p className="pt-8">Copyright &copy; 2024 <Link to={'https://shahadad.com/'}>Md Shahadad Hossain</Link></p>
                    </div>
                </section>
            </section>
        </footer>
    );
};

export default Footer;