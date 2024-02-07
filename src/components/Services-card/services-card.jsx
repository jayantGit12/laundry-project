import React from "react";
import "../Services-card/services-card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShirt, faJugDetergent, faHandHoldingDroplet, faSoap, faBookOpen, faSnowplow } from '@fortawesome/free-solid-svg-icons'


const ServicesCard = () => {
    return (
        <>
            <div className="card_div_main">
                <div className="card_inner pb-4">
                    <div className="card_inner_child text-center">
                        <FontAwesomeIcon icon={faShirt} className="service-card_icons" />
                        <h6>Dry</h6>
                    </div>
                    <div className="card_inner_child text-center">
                        <FontAwesomeIcon icon={faJugDetergent} className="service-card_icons" />
                        <h6>Laundry</h6>
                    </div>
                    <div className="card_inner_child text-center">
                        <FontAwesomeIcon icon={faHandHoldingDroplet} className="service-card_icons" />
                        <h6>Dry Cleaning</h6>
                    </div>
                </div>
                <div className="card_inner pt-4">
                    <div className="card_inner_child text-center">
                        <FontAwesomeIcon icon={faSoap} className="service-card_icons" />
                        <h6>Wash</h6>
                    </div>
                    <div className="card_inner_child text-center">
                        <FontAwesomeIcon icon={faBookOpen} className="service-card_icons" />
                        <h6>Fold</h6>
                    </div>
                    <div className="card_inner_child text-center">
                        <FontAwesomeIcon icon={faSnowplow} className="service-card_icons" />
                        <h6>Ironing</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesCard;