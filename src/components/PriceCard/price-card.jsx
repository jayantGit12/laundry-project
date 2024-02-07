import React from "react";
import "../PriceCard/price-card.css";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const Prisecard = () => {
    return (
        <>
            <div className="price_card_div pt-4">
                <div className="price_icons text-center">
                    <lord-icon
                        src="https://cdn.lordicon.com/spukaklw.json"
                        trigger="hover"
                        colors="primary:#3080e8"
                        styLe="width:60px;height:60px">
                    </lord-icon>
                    <h6>jacket/blazer</h6>
                    <p>$7.99</p>
                </div>
                <div className="price_icons text-center">
                    <lord-icon
                        src="https://cdn.lordicon.com/spukaklw.json"
                        trigger="hover"
                        colors="primary:#3080e8"
                        styLe="width:60px;height:60px">
                    </lord-icon>
                    <h6>jacket/blazer</h6>
                    <p>$7.99</p>
                </div>
                <div className="price_icons text-center">
                    <lord-icon
                        src="https://cdn.lordicon.com/spukaklw.json"
                        trigger="hover"
                        colors="primary:#3080e8"
                        styLe="width:60px;height:60px">
                    </lord-icon>
                    <h6>jacket/blazer</h6>
                    <p>$7.99</p>
                </div>
                <div className="price_icons text-center">
                    <lord-icon
                        src="https://cdn.lordicon.com/spukaklw.json"
                        trigger="hover"
                        colors="primary:#3080e8"
                        styLe="width:60px;height:60px">
                    </lord-icon>
                    <h6>jacket/blazer</h6>
                    <p>$7.99</p>
                </div>
                <div className="price_icons text-center">
                    <lord-icon
                        src="https://cdn.lordicon.com/spukaklw.json"
                        trigger="hover"
                        colors="primary:#3080e8"
                        styLe="width:60px;height:60px">
                    </lord-icon>
                    <h6>jacket/blazer</h6>
                    <p>$7.99</p>
                </div>
            </div>
            <div className="price_card_div pt-4">
                <div className="price_icons text-center">
                    <lord-icon
                        src="https://cdn.lordicon.com/spukaklw.json"
                        trigger="hover"
                        colors="primary:#3080e8"
                        styLe="width:60px;height:60px">
                    </lord-icon>
                    <h6>jacket/blazer</h6>
                    <p>$7.99</p>
                </div>
                <div className="price_icons text-center">
                    <lord-icon
                        src="https://cdn.lordicon.com/spukaklw.json"
                        trigger="hover"
                        colors="primary:#3080e8"
                        styLe="width:60px;height:60px">
                    </lord-icon>
                    <h6>jacket/blazer</h6>
                    <p>$7.99</p>
                </div>
                <div className="price_icons text-center">
                    <lord-icon
                        src="https://cdn.lordicon.com/spukaklw.json"
                        trigger="hover"
                        colors="primary:#3080e8"
                        styLe="width:60px;height:60px">
                    </lord-icon>
                    <h6>jacket/blazer</h6>
                    <p>$7.99</p>
                </div>
                <div className="price_icons text-center">
                    <lord-icon
                        src="https://cdn.lordicon.com/spukaklw.json"
                        trigger="hover"
                        colors="primary:#3080e8"
                        styLe="width:60px;height:60px">
                    </lord-icon>
                    <h6>jacket/blazer</h6>
                    <p>$7.99</p>
                </div>
                <div className="price_icons text-center">
                    <lord-icon
                        src="https://cdn.lordicon.com/spukaklw.json"
                        trigger="hover"
                        colors="primary:#3080e8"
                        styLe="width:60px;height:60px">
                    </lord-icon>
                    <h6>jacket/blazer</h6>
                    <p>$7.99</p>
                </div>
            </div>
        </>
    )
}

export default Prisecard;