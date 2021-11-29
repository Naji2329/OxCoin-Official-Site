import React, { Fragment } from 'react';
import '../../assets/css/home/Oxlabs.scss';
import Download from '../include/Download';
import Nav from '../include/Nav';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

const Oxlabs = () => {
        return (
            <Fragment>
                <div className="oxlabs_section_1">
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
                    <div className="row oxlabs_link_tab">
                        <p className="oxlabs_link_title">OX Labs</p>
                        <p className="oxlabs_link_info1">Home &gt; <span className="oxlabs_link_info2">OX Labs</span></p>
                    </div>
                    </div>
                </div>

                <div className="oxlabs_section2">
                    <div className="container">
                        <div className="row oxlabs_oxlabs_tab">
                            <div className="col-md-6">
                                <Fade left><img className="img-fluid" src="assets/img/oxlabs/feature-img-1.png" alt=""/></Fade>
                            </div>
                            <div className="col-md-6 oxlabs_oxlabs_panel">
                                    <Fade top>
                                    <div className="oxlabs_oxlabs_panel1">
                                        <p className="oxlabs_oxlabs_panel1_text1">Multiple Payments Easier On 
                                            One Platform.</p>
                                        <p className="oxlabs_oxlabs_panel1_text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in 
                                            eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
                                    </div>
                                    </Fade>
                                    <Fade right>
                                    <div className="oxlabs_oxlabs_panel2">
                                        <div className="oxlabs_oxlabs_panel2_img"><img className="img-fluid" src="assets/img/oxlabs/licon-1.png" alt=""/></div>
                                        <div>
                                            <p className="oxlabs_oxlabs_panel2_text1">Secure Payments</p>
                                            <p className="oxlabs_oxlabs_panel2_text2">varius enim in eros elementum tristique</p>
                                        </div>
                                    </div>
                                    </Fade>
                                    <Fade bottom>
                                    <div className="oxlabs_oxlabs_panel2">
                                        <div className="oxlabs_oxlabs_panel2_img"><img className="img-fluid" src="assets/img/oxlabs/licon-2.png" alt=""/></div>
                                        <div>
                                            <p className="oxlabs_oxlabs_panel2_text1">Transaction Anywhere Any Time</p>
                                            <p className="oxlabs_oxlabs_panel2_text2">varius enim in eros elementum tristique</p>
                                        </div>
                                    </div>
                                    </Fade>
                            </div>
                        </div>
                        <div className="row oxlabs_oxlabs_tab">
                            <div className="col-md-6 oxlabs_oxlabs_panel">
                                <Fade left>
                                <div className="oxlabs_oxlabs_panel1">
                                    <p className="oxlabs_oxlabs_panel1_text1">MSmarter Cards Keep You in 
                                        Full Control.</p>
                                    <p className="oxlabs_oxlabs_panel1_text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in 
                                        eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
                                </div>
                                </Fade>
                                <Fade bottom>
                                <div className="oxlabs_oxlabs_panel2">
                                    <div className="oxlabs_oxlabs_panel2_img"><img className="img-fluid" src="assets/img/oxlabs/licon-3.png" alt=""/></div>
                                    <div>
                                        <p className="oxlabs_oxlabs_panel2_text1">Total Control Over Spending</p>
                                        <p className="oxlabs_oxlabs_panel2_text2">varius enim in eros elementum tristique</p>
                                    </div>
                                </div>
                                </Fade>
                                <Fade top>
                                <div className="oxlabs_oxlabs_panel2">
                                    <div className="oxlabs_oxlabs_panel2_img"><img className="img-fluid" src="assets/img/oxlabs/licon-4.png" alt=""/></div>
                                    <div>
                                        <p className="oxlabs_oxlabs_panel2_text1">Accounts Payable</p>
                                        <p className="oxlabs_oxlabs_panel2_text2">varius enim in eros elementum tristique</p>
                                    </div>
                                </div>
                                </Fade>
                            </div>
                            <div className="col-md-6">
                                <Fade right><img className="img-fluid" src="assets/img/oxlabs/feature-img-2.png" alt="" /></Fade>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="oxlabs_section3">
                    <div className="container">
                        <div className="offset-xl-3 col-xl-6 offset-md-2 col-md-8 oxlabs_contact_form">
                            <Fade top>
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="oxlabs_contact_form_text">Ready to Share Your Idea?</p>
                                </div>
                            </div>
                            <div className="row oxlabs_msg_input_box">
                            <div className="col-md-6">
                                <input type="text" className="form-control" id="firstname" placeholder="First Name" />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" id="lastname" placeholder="Last Name" />
                            </div>
                            </div>
                            <div className="row oxlabs_msg_input_box">
                                <div className="col-md-12">
                                    <input type="email" className="form-control" id="email" placeholder="Email" />
                                </div>
                            </div>
                            <div className="row oxlabs_msg_input_box">
                                <div className="col-md-12">
                                    <textarea className="form-control" placeholder="Idea" id="idea" style={{height: '200px'}}></textarea>
                                </div>
                            </div>
                            <div className="oxlabs_submit_form"><button type="button" className="oxlabs_submit_btn">Submit</button></div>
                            </Fade>
                            <Fade top><img className="img-fluid" id="person1" src="assets/img/oxlabs/Ellipse 31.png" alt="" /></Fade>
                            <Fade left><img className="img-fluid" id="person2" src="assets/img/oxlabs/Ellipse 32.png" alt="" /></Fade>
                            <Fade bottom><img className="img-fluid" id="person3" src="assets/img/oxlabs/Ellipse 33.png" alt="" /></Fade>
                            <Fade top><img className="img-fluid" id="person4" src="assets/img/oxlabs/Ellipse 34.png" alt="" /></Fade>
                            <Fade right><img className="img-fluid" id="person5" src="assets/img/oxlabs/Ellipse 35.png" alt="" /></Fade>
                            <Fade bottom><img className="img-fluid" id="person6" src="assets/img/oxlabs/Ellipse 36.png" alt="" /></Fade>
                        </div>
                    </div>
                </div>
                <div className="oxlab_download">
                    <div className="container">
                        <Fade bottom><Download /></Fade>
                    </div>
                </div>
            </Fragment>
        )
}

export default Oxlabs;