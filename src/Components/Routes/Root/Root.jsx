import { Helmet } from "react-helmet";
import { Outlet } from "react-router";

const Root = () => {
    return (
        <section>
            <Helmet>
                <title>Shahadad - Home</title>
            </Helmet>
            <Outlet></Outlet>
        </section>
    );
};

export default Root;