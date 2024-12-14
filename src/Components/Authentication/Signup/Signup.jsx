import { Link } from "react-router";

const Signup = () => {
    return (
        <section className="xl:py-40 lg:py-24 py-14 max-w-xl lg:mx-auto mx-4">
            <div className="shadow-lg lg:px-8 px-4 py-16 space-y-5 border-t-[5px] border-t-red-500 rounded-lg">
                <h3 className="text-2xl">Hi, Register here!</h3>
                <div className="space-y-4 pt-5">
                    <input className=' px-4 py-4 w-full border-[#202839] focus:ring-0 focus:border-gray-500 focus:outline-0 focus:outline-gray-500 rounded-lg bg-gray-100' type="text" name="name" placeholder='Email Address' id="" />
                    <input className=' px-4 py-4 w-full border-[#202839] focus:ring-0 focus:border-gray-500 focus:outline-0 focus:outline-gray-500 rounded-lg bg-gray-100' type="text" name="name" placeholder='Username' id="" />
                    <input className=' px-4 py-4 w-full border-[#202839] focus:ring-0 focus:border-gray-500 focus:outline-0 focus:outline-gray-500 rounded-lg bg-gray-100' type="text" name="name" placeholder='Name' id="" />
                    <input className=' px-4 py-4 w-full border-[#202839] focus:ring-0 focus:border-gray-500 focus:outline-0 focus:outline-gray-500 rounded-lg bg-gray-100' type="text" name="name" placeholder='Password' id="" />
                </div>
                <div className="w-full text-center space-y-4 pt-8">
                    <Link>
                        <button className="bg-red-500 text-white text-lg w-full py-3 rounded-lg">Register</button>
                    </Link>
                    <p>Already Have an account?
                        <Link to={'/login'}>
                            <span className="text-red-500 text-center text-lg font-medium"> Login Now</span>
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Signup;