import React from "react";
import "../WorkCard/workCard.css";
import Shape from "../../images/shapes/shape.svg"
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WorkCard = () => {
    return (
        <>
            <div>
                <div className="main_card_div">
                    <div className="position-relative pt-5">
                    <img src={Shape} alt="shape" />
                    <FontAwesomeIcon icon={faMobileScreenButton} fontSize={"23px"} className="icons_how" />
                    </div>
                    <div className="how_card_content pt-4 mt-1 pb-2">
                    <h6>SIGNUP</h6>
                    <p className="card_subTitle">Sign up for join our website <br /> and sumbit or order</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkCard;