import React from "react";
import "../WorkSection/WorkSection.css"
// import background from "../../images/BG_image/bg_1.png"
import WorkCard from "../WorkCard/workCard";

const WorkSection = () => {
    return (
        <>
            <section className="my-5">
                {/* <div>
                    <img src={background} alt="bg_image" />
                </div> */}
                <div className="container">
                        <div className="Work_Section">
                            <div className="mb-4">
                            <h5>How It Works</h5>
                            <p className="work_section_titile">NAM ODIO TURPISPOSUERE VERTIBULUM</p>
                            </div>
                            <div className="row pt-4">
                            <div className="col-lg-3">
                                <WorkCard/>
                            </div>
                            <div className="col-lg-3">
                                <WorkCard/> 
                            </div>
                            <div className="col-lg-3">
                                <WorkCard/> 
                            </div>
                            <div className="col-lg-3">
                                 <WorkCard/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WorkSection;