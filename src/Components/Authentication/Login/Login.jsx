import { Link } from "react-router";

const Login = () => {
    return (
        <section className="py-40 max-w-xl mx-auto">
            <div className="shadow-lg px-8 py-16 space-y-5">
                <h3 className="text-2xl">Hi, Welcome Back!</h3>
                <div className="space-y-4 pt-5">
                    <input className=' px-4 py-4 w-full border-[#202839] focus:ring-0 focus:border-gray-500 focus:outline-0 focus:outline-gray-500 rounded-lg bg-gray-100' type="text" name="name" placeholder='Username or Email Address' id="" />
                    <input className=' px-4 py-4 w-full border-[#202839] focus:ring-0 focus:border-gray-500 focus:outline-0 focus:outline-gray-500 rounded-lg bg-gray-100' type="text" name="name" placeholder='Password' id="" />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <input className="bg-gray-100 border-none" type="checkbox" name="checkbox" id="" />
                        <h3 className="text-lg">Keep me signed in</h3>
                    </div>
                    <div>
                        <Link>
                            <button className="text-red-500 text-lg font-medium">Forgot?</button>
                        </Link>
                    </div>
                </div>
                <div className="w-full text-center space-y-4 pt-8">
                    <Link>
                        <button className="bg-red-500 text-white text-lg w-full py-3 rounded-lg">Sign in</button>
                    </Link>
                    <p>Don't Have an account?
                        <Link to={'/signup'}>
                            <span className="text-red-500 text-center text-lg font-medium"> Register Now</span>
                        </Link></p>
                </div>
            </div>
        </section>
    );
};

export default Login;