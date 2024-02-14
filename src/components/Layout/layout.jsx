import React from "react";
import Banner from "../Banner/banner";
import Footer from "../Footer/footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <>
            <Banner/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout;