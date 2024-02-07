import React from "react";
import "../Footer/footer.css";
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <>
            <footer className="footer-area footer--light">
                <div className="footer-big">
                    {/* start .container */}
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-12">
                                <div className="footer-widget">
                                    <div className="widget-about">
                                        <h2>Laundry <span>Lab</span>
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vel architecto sunt fugit,
                                            itaque laudantium cum at dolor eaque aut perferendis eligendi tempore corporis tempora ipsam et sit illum dicta.
                                        </p>
                                        <div>
                                            <span className="d-flex gap-3">
                                           <InstagramIcon/>
                                           <FacebookIcon/>
                                           <TwitterIcon/>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* Ends: .footer-widget */}
                            </div>
                            {/* end /.col-md-4 */}
                            <div className="col-md-3 col-sm-4">
                                <div className="footer-widget">
                                    <div className="footer-menu">
                                        <h4 className="footer-widget-title">Useful Links</h4>
                                        <ul className="ps-0 footer_ul">
                                            <li>
                                                <Link to="#">Privacy</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Security</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Terms and Conditions</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Support</Link>
                                            </li>
                                            <li>
                                                <Link to="#">fAQs</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* end /.footer-menu */}
                                </div>
                                {/* Ends: .footer-widget */}
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="footer-widget">
                                    <div className="footer-menu footer-menu--1">
                                        <h4 className="footer-widget-title">Menu</h4>
                                        <ul className="ps-0 footer_ul">
                                            <li>
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/">About Us</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Price List</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Contact</Link>
                                            </li>
                                            <li>
                                                <Link to="/">FAQ's</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* end /.footer-menu */}
                                </div>
                                {/* Ends: .footer-widget */}
                            </div>
                            {/* end /.col-md-3 */}

                            {/* end /.col-lg-3 */}
                            <div className="col-md-3 col-sm-4">
                                <div className="footer-widget">
                                    <div className="footer-menu no-padding">
                                        <h4 className="footer-widget-title">Contact</h4>
                                        <ul className="ps-0 footer_ul">
                                            <li>
                                                <a href="#">Support Forum</a>
                                            </li>
                                            <li>
                                                <a href="#">Terms &amp; Conditions</a>
                                            </li>
                                            <li>
                                                <a href="#">Support Policy</a>
                                            </li>
                                            <li>
                                                <a href="#">Refund Policy</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* end /.footer-menu */}
                                </div>
                                {/* Ends: .footer-widget */}
                            </div>
                            {/* Ends: .col-lg-3 */}
                        </div>
                        {/* end /.row */}
                    </div>
                    {/* end /.container */}
                </div>
                {/* end /.footer-big */}
                <div className="mini-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="copyright-text">
                                    <p>
                                        © 2018
                                        <a href="#">DigiPro</a>. All rights reserved. Created by
                                        <a href="#">AazzTech</a>
                                    </p>
                                </div>
                                {/* <div className="go_top">
                                    <span className="icon-arrow-up" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Footer;