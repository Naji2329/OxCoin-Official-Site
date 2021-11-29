import React, { Fragment } from 'react';
import '../../assets/css/home/Contactus.scss';
import Download from '../include/Download';
import Nav from '../include/Nav';
import { Link } from 'react-router-dom';

import { Fade } from 'react-reveal';

const Contactus = () => {
        return (
            <Fragment>
                <div className="contact_section_1">
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
                    <div className="row contact_link_tab">
                        <p className="contact_link_title">Contact Us</p>
                        <p className="contact_link_info1">Home &gt; <span className="contact_link_info2">Contact Us</span></p>
                    </div>
                    </div>
                </div>

                <div className="contact_section2">
                    <div className="container">
                        <div className="row contact_msg_box">
                            <Fade top>
                            <div className="col-xl-6 col-md-12">
                                <p className="contact_msg_box_left_text1">Feel Free to Drop us a Message</p>
                                <p className="contact_msg_box_left_text2">Need to speak to us? Do you have any queries or suggestions? Please 
                                    contact us about all enquiries including membership and volunteer 
                                    work using the form below.</p>
                                <div className="row contact_msg_input_box">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" id="firstname" placeholder="First Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" id="lastname" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="row contact_msg_input_box">
                                    <div className="col-md-6">
                                        <input type="email" className="form-control" id="email" placeholder="Email" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                    </div>
                                </div>
                                <div className="row contact_msg_input_box">
                                    <div className="col-md-12">
                                        <textarea className="form-control" placeholder="Message" id="message" style={{'height': '200px'}}></textarea>
                                    </div>
                                </div>
                            </div>
                            </Fade>
                            <Fade right>
                            <div className="offset-xl-1 col-xl-5 col-md-12 contact_msg_box_right">
                                <div className="contact_icon_panel">
                                    <div className="contact_msg_box_right_img"><img className="img-fluid" src="assets/img/contactus/home_icon.png" alt=""/></div>
                                    <div className="contact_msg_box_right_text">
                                        <p className="contact_msg_box_right_text1">Address</p>
                                        <p className="contact_msg_box_right_text2">123 Disney Street Slim Av. Brooklyn Bridge, 
                                            NY, New York</p>
                                    </div>
                                </div>
                                <hr style={{'backgroundColor': '#ffffffb4'}} />
                                <div className="contact_icon_panel">
                                    <div className="contact_msg_box_right_img"><img className="img-fluid" src="assets/img/contactus/phone_icon.png" alt=""/></div>
                                    <div className="contact_msg_box_right_text">
                                        <p className="contact_msg_box_right_text1">Phone Numbers</p>
                                        <p className="contact_msg_box_right_text2">+88 0123 4567 890</p>
                                        <p className="contact_msg_box_right_text2">+88 0231 3421 453</p>
                                    </div>
                                </div>
                                <hr style={{'backgroundColor': '#ffffffb4'}} />
                                <div className="contact_icon_panel">
                                    <div className="contact_msg_box_right_img"><img className="img-fluid" src="assets/img/contactus/msg_icon.png" alt="" /></div>
                                    <div className="contact_msg_box_right_text">
                                        <p className="contact_msg_box_right_text1">Email Addresses</p>
                                        <p className="contact_msg_box_right_text2">123 Disney Street Slim Av. Brooklyn Bridge, 
                                            NY, New York</p>
                                    </div>
                                </div>
                            </div>
                            </Fade>
                        </div>
                        <Fade bottom>
                        <div className="row">
                            <div className="contact_sendMessage_form"><button type="button" className="contact_sendMessage_btn">Send Message</button></div>
                        </div>
                        </Fade>
                        <Fade left>
                            <Download />
                        </Fade>
                        
                    </div>
                </div>
            </Fragment>
        )
}

export default Contactus;