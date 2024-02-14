import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://log-g5ki.vercel.app/login",
    headers:{
        'Content-Type': 'application/json'
    }
})

export { axiosClient };

import React from "react";
import { useState } from "react";
import "../SignUp/signup.css";
import { Link } from 'react-router-dom';
import Google from "../../../src/images/google-color-icon.svg";
import Facebook from "../../../src/images/facebook-round-color-icon.svg"
import axios from "axios";

const Signup = () => {

    // const [fname, setFname] = useState('')
    // const [mobile, setMobile] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [cpassword, setCpassword] = useState('')
    // const [addresh, setAddresh] = useState('')

    // const handleFname = (e) => {
    //     setFname(e.target.value)
    // }
    // const handleMobile = (e) => {
    //     setMobile(e.target.value)
    // }
    // const handleEmail = (e) => {
    //     setEmail(e.target.value)
    // }
    // const handlePassword = (e) => {
    //     setPassword(e.target.value)
    // }
    // const handleCpassword = (e) => {
    //     setCpassword(e.target.value)
    // }
    // const handleAddress = (e) => {
    //     setAddresh(e.target.value)
    // }
    // const submit = (e) => {
    //     e.preventDefault();
    //     let items = {
    //         fname, mobile, email, password, cpassword, addresh
    //     }
    //     console.log(items)
    //     axios.post('https://log-g5ki.vercel.app/register', {
    //         fname: fname,
    //         mobile: mobile,
    //         email: email,
    //         password: password,
    //         cpassword: cpassword,
    //         addresh: addresh
    //     })
    //         .then(result => {
    //             console.log(result.data);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }


     

    // return (
    //     <>
    //         <section className="login_section my-5 py-5">
    //             <div className="container">
    //                 <div className="row">
    //                     <div className="col-lg-12 d-flex align-items-center justify-content-center vh-100">
    //                         <div className="main_div">
    //                             <h4>
    //                                 Sign Up
    //                             </h4>

    //                             <div className="social_icon mt-4">
    //                                 <button className="btn ttext-dark">
    //                                     <img src={Google} alt="google_image" />
    //                                     Sign in with Google
    //                                 </button>
    //                                 <button className="mt-2 btn ttext-dark">
    //                                     <img src={Facebook} alt="google_image" />
    //                                     Sign in with Facebook
    //                                 </button>
    //                             </div>
    //                             <p className="divider mt-3">or Sign in with Email</p>
    //                             <form>
    //                                 <div className="form-group">
    //                                     <label htmlFor="exampleInputEmail1">First Name</label>
    //                                     <input
    //                                         type="text"
    //                                         value={fname}
    //                                         onChange={handleFname}
    //                                         className="form-control"
    //                                         placeholder="Enter First Name"
    //                                     />
    //                                 </div>
    //                                 <div className="form-group">
    //                                     <label htmlFor="exampleInputEmail1">Mobile Number</label>
    //                                     <input
    //                                         type="text"
    //                                         value={mobile}
    //                                         onChange={handleMobile}
    //                                         className="form-control"
    //                                         placeholder="Enter Mobile Number"
    //                                     />
    //                                 </div>
    //                                 <div className="form-group">
    //                                     <label htmlFor="exampleInputEmail1">Email</label>
    //                                     <input
    //                                         type="email"
    //                                         value={email}
    //                                         onChange={handleEmail}
    //                                         className="form-control"
    //                                         placeholder="Enter Email Address"
    //                                     />
    //                                 </div>
    //                                 <div className="form-group">
    //                                     <label htmlFor="exampleInputPassword1">Password</label>
    //                                     <input
    //                                         type="password"
    //                                         value={password}
    //                                         onChange={handlePassword}
    //                                         className="form-control"
    //                                         placeholder="Enter Password"
    //                                     />
    //                                 </div>
    //                                 <div className="form-group">
    //                                     <label htmlFor="exampleInputPassword1">Confirm Password</label>
    //                                     <input
    //                                         type="password"
    //                                         value={cpassword}
    //                                         onChange={handleCpassword}
    //                                         className="form-control"
    //                                         placeholder="Confirm Your Password"
    //                                     />
    //                                 </div>
    //                                 <div className="form-group">
    //                                     <label htmlFor="exampleInputPassword1">Address</label>
    //                                     <input
    //                                         type="text"
    //                                         value={addresh}
    //                                         onChange={handleAddress}
    //                                         className="form-control"
    //                                         placeholder="Enter Your Address"
    //                                     />
    //                                 </div>
    //                                 <div className="forgetPass text-end my-3">
    //                                     <Link to="/login">Already Have an Account ?</Link>
    //                                 </div>
    //                                 <button type="submit" onClick={submit} className="btn btn-primary submit_btn">
    //                                     Sign up
    //                                 </button>
    //                             </form>

    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </section>
    //     </>
    // )
}

export default Signup;