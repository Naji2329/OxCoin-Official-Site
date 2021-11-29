import React , { Fragment } from 'react';
import '../../assets/css/home/Location.scss';
import { Link } from 'react-router-dom';
import Nav from '../include/Nav';
import { Email } from '@mui/icons-material';
import { Fade } from 'react-reveal';
import Download from '../include/Download';

const Location = () => {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
    return (
        <Fragment>
            <div className="location_section_1">
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
                    <p className="aboutus_link_title">Office Location</p>
                    <p className="aboutus_link_info1">Home &gt; <span className="aboutus_link_info2">Office Location</span></p>
                </div>
                </div>
            </div>
            
            <div className="location_section_2">
                <div className="container">
                    <div className='row'>
                        <Fade left>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="location_box">
                                <img className="img-fluid" src="assets/img/location/china.png" />
                                <p className="text1">China</p>
                                <p className="text2"><Email className="" /> info@gmail.com</p>
                            </div>
                        </div>
                        </Fade>
                        <Fade top>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="location_box">
                                <img className="img-fluid" src="assets/img/location/sydney.png" />
                                <p className="text1">Sydney</p>
                                <p className="text2"><Email className="" /> info@gmail.com</p>
                            </div>
                        </div>
                        </Fade>
                        <Fade right>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="location_box">
                                <img className="img-fluid" src="assets/img/location/athens.png" />
                                <p className="text1">Athens</p>
                                <p className="text2"><Email className="" /> info@gmail.com</p>
                            </div>
                        </div>
                        </Fade>
                        <Fade left>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="location_box">
                                <img className="img-fluid" src="assets/img/location/london.png" />
                                <p className="text1">London</p>
                                <p className="text2"><Email className="" /> info@gmail.com</p>
                            </div>
                        </div>
                        </Fade>
                        <Fade top>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="location_box">
                                <img className="img-fluid" src="assets/img/location/india.png" />
                                <p className="text1">India</p>
                                <p className="text2"><Email className="" /> info@gmail.com</p>
                            </div>
                        </div>
                        </Fade>
                    </div>
                </div>

                <div className="container">
                    <Fade bottom><Download /></Fade>
                </div>
            </div>
        </Fragment>
    )
}

export default Location;