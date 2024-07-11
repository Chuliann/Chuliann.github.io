import { createBrowserRouter, Navigate, createHashRouter } from "react-router-dom";
import Home from "../pages/Home"
import Services from "../pages/Services"
import Header from "../layout/Header"
import Building from "../layout/Building";

const router = createHashRouter([
    {
        path: "/",
        name: "home",
        element: <Header />,
        children: [
            {
            path: '/',
            element: <Home />
            }, {
                path: "/services",
                element: <Services />
            }, {
                path: "/proyects",
                element: <Building />
            }, {
                path: "/about-me",
                element: <Building />
            }
        ]
    }
])





export default router;