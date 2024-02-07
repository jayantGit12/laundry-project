import React from "react";
import "./navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <section className="navbar_section pb-4 pt-3 navbar-light fixed-top bg-transparent">
                <div>
                    <nav className="navbar navbar-expand-lg navbar">
                        <Link className="navbar-brand" to="/">
                            Laundry <span>Lab</span>
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto gap-lg-4 gap-0">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">
                                        HOME
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="aboutus">
                                        ABOUT US
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="pricelist">
                                        PRICE LIST
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="contact">
                                        CONTACT
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="faqs">
                                        FAQ's
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link register_btn" Link="">REGISTER / LOGIN</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    )
}

export default Navbar