import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-[#202839] text-white">
            <section className="py-16">
                <section className="flex justify-evenly items-start px-80">
                    <div>
                        <img className="bg-amber-600 rounded-3xl w-72 h-72" src="https://i.postimg.cc/xdDSkvJ5/Banner-Img-without-bg-2.png" alt="" />
                        <div>
                            <h4 className="text-xl font-semibold py-2">Shahadad Hossain</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Iusto, doloribus?</p>
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
                <section className="flex ml-[440px]">
                    <div>
                        <img className="w-3/4 py-10" src="https://nazmc.com/wp-content/uploads/2023/12/SSLCOMMERZ-Pay-With-logo-All-Size_Aug-21-05-1536x55.png" alt="" />
                        <hr />
                        <p className="pt-8">Copyright &copy; 2024 <Link to={'https://shahadad.com/'}>Md Shahadad Hossain</Link></p>
                    </div>
                </section>
            </section>
        </footer>
    );
};

export default Footer;