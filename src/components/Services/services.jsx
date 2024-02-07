import React from "react";
import "../Services/services.css";
import Button from "../Button/button";
import ServicesCard from "../Services-card/services-card";

const OurServices = () => {
    return (
        <>
            <section className="services_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 d-flex align-items-center">
                            <div>
                                <h5>Our <span>Services</span></h5>
                                <h4 className="fw-bold">We provide <br />Every laundry solution</h4>
                                <p className="mt-3">Laundry lab is next generation laundry servie and dry cleaning <br />
                                    with delivery in all places. Its easy convertable and affortable servies
                                    thats take care of at your dirty cloths <br /> affortable servies
                                    thats take care of at your dirty cloths</p>
                                <Button />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <ServicesCard />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurServices;