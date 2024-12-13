import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../../HomeComponent/Home/Home";
import Learn from "../../LearnComponents/Learn/Learn";

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
                path: "/learn",
                element: <Learn></Learn>
            }
        ]
    }
])

export default router;