import React , { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../include/Nav';
import "../../assets/css/auth/Login.scss";
import Download from '../include/Download';

const Login = () => {
    return (
        <Fragment>
            <div className="aboutus_section_1">
                <div className="container">
                    <div id="nav_box1" style={{display: "flex", justifyContent: "flex-end", alignItems: "center", position: "relative"}}>
                        <Link to="/"><img className="img-fluid" src="assets/img/index/logo.png" width="200" height="30" alt="" style={{ position: "absolute", left: "0" }} /></Link>
                        <Nav />
                        <Link to="" className="nav-link wallet_btn wallet_btn_fontColor" href="#">&nbsp;&nbsp;<img className="img-fluid" src="assets/img/index/Icon awesome-wallet.png" width="21.78" height="19.05"  alt="" />&nbsp;&nbsp;Wallet</Link>
                        <Link to="" className="nav-link account_btn dropdown-toggle" href="#" >
                        &nbsp;&nbsp;<img className="img-fluid" src="assets/img/index/Icon awesome-user-alt.png" width="19.05" height="19.05" alt="" />&nbsp;&nbsp;Account
                        </Link>
                    </div>
                    <div id="nav_box2" style={{display: "none", justifyContent: "flex-end", alignItems: "center", position: "relative"}}>
                        <Link to="/"><img className="img-fluid" src="assets/img/index/logo.png" width="200" height="30" alt="" style={{ position: "absolute", left: "0" }} /></Link>
                        <Link to="" className="nav-link account_btn dropdown-toggle navbar_rightbox" href="#" >
                        &nbsp;&nbsp;<img className="img-fluid" src="assets/img/index/Icon awesome-user-alt.png" width="19.05" height="19.05" alt="" />&nbsp;&nbsp;Account
                        </Link>
                    </div>
                    <div className="row aboutus_link_tab">
                        <p className="aboutus_link_title">Login</p>
                        <p className="aboutus_link_info1">Home &gt; <span className="aboutus_link_info2">Login</span></p>
                    </div>
                </div>
            </div>
            <div className="login_section">
                <img className="login_img" src="assets/img/auth/login.png"alt="" />
                <div className="container">
                    <div className="row">   
                        <div className="col-xl-6 col-md-12 col-sm-12">
                            <div className="login_panel">
                                <p className="login_title">Log In</p>
                                <div className="login_email">
                                    <input type="text" className="form-control" id="email" placeholder="Email" />
                                </div>
                                <div className="login_pass">
                                    <input type="text" className="form-control" id="password" placeholder="Password" />
                                </div>
                                <div className="login_remember">
                                    <input type="checkbox" className="remember_icon" /> <span className="login_rem_text">Remember Me </span>
                                </div>
                                <div className="forget_box">
                                    <div className="login_submit_form"><button type="button" className="login_submit_btn">Submit</button></div>
                                    <p className="forget_text">Forget Your Password?</p>
                                </div>
                                <div className="signup_text">
                                    <p><span className="login_newUser_text">New User?</span>&nbsp;<span className="login_signUp_text">Sign Up</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Download />
                </div>
            </div>
        </Fragment>
    )
}

export default Login;