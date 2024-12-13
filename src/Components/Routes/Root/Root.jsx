import { Helmet } from "react-helmet";
import { Outlet } from "react-router";
import Footer from "../../Footer/Footer";

const Root = () => {
    return (
        <section>
            <Helmet>
                <title>Shahadad - Home</title>
            </Helmet>
            <Outlet></Outlet>
            <Footer></Footer>
        </section>
    );
};

export default Root;