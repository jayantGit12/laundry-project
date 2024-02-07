import React from "react";
import "../Promises/promise.css";
// import Clear from "../../images/Clear.jpg";
import Video from "../../images/video_laundry.mp4";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const Promises = () => {
    return (
        <>
            <section className="Promises_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div>
                                <div className="wrapper_promises">
                                    <h2>Laundry Lab <br /><span>Promises</span></h2>
                                    <p className="mt-3">Laundry lab is next generation laundry servie and dry cleaning <br />
                                        with delivery in all places. Its easy convertable and affortable <br />
                                        servies thats take care of at your dirty cloths</p>
                                </div>
                                <div className="animate_icon">
                                    <div>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/wyqtxzeh.json"
                                            trigger="loop"
                                            styLe="width:60px;height:60px">
                                        </lord-icon>
                                        <h6>100% Happiness <br />
                                            Guarantee</h6>
                                    </div>
                                    <div className="vr"></div>
                                    <div>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/njmddhpx.json"
                                            trigger="loop"
                                            styLe="width:60px;height:60px">
                                        </lord-icon>
                                        <h6>It's fast</h6>
                                    </div>
                                    <div className="vr"></div>
                                    <div>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/taymdfsf.json"
                                            trigger="loop"
                                            styLe="width:60px;height:60px">
                                        </lord-icon>
                                        <h6>Top Quality</h6>
                                    </div>
                                    <div className="vr"></div>
                                    <div>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/rwiwjhim.json"
                                            trigger="loop"
                                            styLe="width:60px;height:60px">
                                        </lord-icon>
                                        <h6>Cleaner and Greener</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div>
                                <video src={Video} width="100%" height="300" controls="controls" autoplay="false" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Promises;