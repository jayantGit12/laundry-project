import "../login/login.css";
import { Link } from "react-router-dom";
import Google from "../../../src/images/google-color-icon.svg";
import Facebook from "../../../src/images/facebook-round-color-icon.svg"

const Login = () => {

    return (
        <>
            <section className="login_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 d-flex align-items-center justify-content-center vh-100">
                            <div className="main_div">
                                <h4>
                                    Login
                                </h4>
                                <h6>Welcome</h6>
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
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter email"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="text-end py-3">
                                        <Link className="forgetPass text-end mt-1" to="/signup">If not have an account resgister</Link>
                                    </div>
                                    <button type="submit" className="btn btn-primary submit_btn">
                                        Login
                                    </button>
                                </form>

                            </div>
                        </div>
                        {/* <div className="col-lg-6">
                            <div className="right_image">
                                <figure>
                                    <img src={Laundry} alt="" />
                                </figure>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;