import React from "react";
import "../Banner/banner.css"
import Navbar from  "../Navbar/navbar";
import Button from "../Button/button";

const Banner = () => {
    return (
        <> 
            <section className="Banner_wrapper">
                <div className="container-fluid">
                    <div className="banner_content d-flex justify-content-center align-items-center text-center">
                        <div className="content_div">
                            <h2>Cleaning and Laundry</h2>
                            <p className="Door">delivered to your door</p>
                            <p className="sub_title">we are open 7 days per week 6am to 10pm</p>
                            <h6 className="mb-3">444-555-6663</h6>
                            <Button />
                        </div>
                    </div>
                </div>
            </section>
            <div>
            <Navbar/>
            </div>
        </>
    )
}

export default Banner;