import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Header, Footer } from "./components";
import "./scss/global.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Header />
        <main>
            <RouterProvider router={router} />
        </main>
        <Footer />
    </React.StrictMode>
);
