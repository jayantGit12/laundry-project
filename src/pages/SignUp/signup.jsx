import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../SignUp/signup.css";
import { Link } from 'react-router-dom';
import Google from "../../../src/images/google-color-icon.svg";
import Facebook from "../../../src/images/facebook-round-color-icon.svg"

const Signup = () => {

    const [fname, setFname] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [addresh, setAddresh] = useState('');

    
    function getvalue(e) {
        e.preventDefault()
        let collection = {
            fname, mobile, email, password, cpassword, addresh
        }
        console.log(collection);
    }

    return (
        <>
            <section className="login_section my-5 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 d-flex align-items-center justify-content-center vh-100">
                            <div className="main_div">
                                <h4>
                                    Sign Up
                                </h4>

                                <div className="social_icon mt-4">
                                    <button className="btn ttext-dark">
                                        <img src={Google} alt="google_image" />
                                        Sign in with Google
                                    </button>
                                    <button className="mt-2 btn ttext-dark">
                                        <img src={Facebook} alt="google_image" />
                                        Sign in with Facebook
                                    </button>
                                </div>
                                <p className="divider mt-3">or Sign in with Email</p>
                                <form onSubmit={getvalue}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">First Name</label>
                                        <input
                                            type="text"
                                            value={fname}
                                            onChange={(e) => setFname(e.target.value)}
                                            className="form-control"
                                            placeholder="Enter First Name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Mobile Number</label>
                                        <input
                                            type="text"
                                            value={mobile}
                                            onChange={(e) => setMobile(e.target.value)}
                                            className="form-control"
                                            placeholder="Enter Mobile Number"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="form-control"
                                            placeholder="Enter Email Address"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="form-control"
                                            placeholder="Enter Password"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Confirm Password</label>
                                        <input
                                            type="password"
                                            value={cpassword}
                                            onChange={(e) => setCpassword(e.target.value)}
                                            className="form-control"
                                            placeholder="Confirm Your Password"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Address</label>
                                        <input
                                            type="text"
                                            value={addresh}
                                            onChange={(e) => setAddresh(e.target.value)}
                                            className="form-control"
                                            placeholder="Enter Your Address"
                                        />
                                    </div>
                                    <div className="forgetPass text-end my-3">
                                        <Link to="/login">Already Have an Account ?</Link>
                                    </div>
                                    <button type="submit" className="btn btn-primary submit_btn">
                                        Sign up
                                    </button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ToastContainer />
        </>
    )
}

export default Signup;