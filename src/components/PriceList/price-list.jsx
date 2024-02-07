import React from "react";
import "../PriceList/price-list.css"
import Prisecard from "../PriceCard/price-card";

const PriceList = () => {
    return (
        <>
            <section className="my-5">
                <div className="container">
                    <div className="price_Section">
                        <div className="mb-4">
                            <h5>Price List</h5>
                            <p className="work_section_titile pt-2">NAM ODIO TURPISPOSUERE VERTIBULUM NAM ODIO TURPISPOSUERE VERTIBULUM <br />NAM ODIO TURPISPOSUERE VERTIBULUM</p>
                        </div>
                    </div>
                    <div>
                        <Prisecard/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PriceList;