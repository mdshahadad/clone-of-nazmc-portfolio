import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../../HomeComponent/Home/Home";
import Learn from "../../LearnComponents/Learn/Learn";
import Signup from "../../Authentication/Signup/Signup";
import Login from "../../Authentication/Login/Login";
import Consulting from "../../ConsultingComponent/Consulting/Consulting";
import About from "../../AboutComponent/About/About";
import Contact from "../../ContactComponent/Contact/Contact";
import ClientSuccess from "../../ClientSuccess/ClientSuccess";
import MarketingAudit from "../../ConsultingComponent/MarketingAuditComponent/MarketingAudit";
import Marketing from "../../ConsultingComponent/MarketingAuditComponent/Marketing/Marketing";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/consulting',
                element: <Consulting></Consulting>,
            },
            {
                path: "/learn",
                element: <Learn></Learn>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: "/clientSuccess",
                element: <ClientSuccess></ClientSuccess>
            },
            {
                path: '/marketing-audit-service',
                element: <Marketing></Marketing>
            }

        ]
    }
])

export default router;