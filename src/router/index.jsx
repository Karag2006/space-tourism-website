import { createBrowserRouter } from "react-router-dom";
import { Home, Destination, Crew } from "../pages";
import Layout from "../Layout.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "destination",
                element: <Destination />,
            },
            {
                path: "crew",
                element: <Crew />,
            },
        ],
    },
]);
