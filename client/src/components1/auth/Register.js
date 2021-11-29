import React , { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../include/Nav';
import "../../assets/css/auth/Register.scss";
import Download from '../include/Download';

const Register = () => {
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
                        <p className="aboutus_link_title">Register</p>
                        <p className="aboutus_link_info1">Home &gt; <span className="aboutus_link_info2">Register</span></p>
                    </div>
                </div>
            </div>
            <div className="register_section">
                <img className="register_img" src="assets/img/auth/register.png" alt="" />
                <div className="container">
                    <div className="row">   
                        <div className="col-xl-6 col-md-12 col-sm-12">
                            <div className="register_panel">
                                <p className="register_title">Register</p>
                                <div className="row">
                                    <div className="col-xl-6 col-md-12 col-sm-12 register_email">
                                        <input type="text" className="form-control common_input_form" id="firstname" placeholder="Firstname" />
                                    </div>
                                    <div className="col-xl-6 col-md-12 col-sm-12 register_pass">
                                        <input type="text" className="form-control common_input_form" id="lastname" placeholder="Lastname" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-md-12 col-sm-12 register_email">
                                        <input type="text" className="form-control common_input_form" id="mobilenumber" placeholder="Mobile Number" />
                                    </div>
                                    <div className="col-xl-6 col-md-12 col-sm-12 register_email">
                                        <input type="text" className="form-control common_input_form" id="email" placeholder="Email Address" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="register_email">
                                        <input type="date" id="date_form" className="dateinput form-control common_input_form" placeholder="DD MM YY" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="register_email"><input type="text" className="form-control common_input_form " id="referralCode" placeholder="Referral Code" /></div>
                                </div>
                                <div className="row">
                                <div className="register_email"><input type="text" className="form-control common_input_form " id="password" placeholder="Password" /></div>
                                </div>
                                <div className="row">
                                <div className="register_email"><input type="text" className="form-control common_input_form " id="repassword" placeholder="Conform Password" /></div>
                                </div>
                                <div className="register_remember">
                                    <input type="checkbox" className="remember_icon" /> <span className="register_rem_text">I agree to the <span className="register_rem_text1">Terms & Conditions</span> </span>
                                </div>
                                <div className="forget_box">
                                    <div className="register_submit_form"><button type="button" className="register_submit_btn">Sign Up</button></div>
                                </div>
                                <div className="signup_text">
                                    <p><span className="register_newUser_text">Already have an Account?</span>&nbsp;<span className="register_signUp_text">Log In</span></p>
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

export default Register;