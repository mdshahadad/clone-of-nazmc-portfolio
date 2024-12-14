import { Helmet } from "react-helmet";
import { Outlet } from "react-router";
import Footer from "../../Footer/Footer";
import Navbar from "../../HomeComponent/Navbar/Navbar";

const Root = () => {
    return (
        <section>
            <Helmet>
                <title>Shahadad - Home</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="pt-16">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default Root;