import React, { Fragment } from 'react';
import '../../assets/css/home/Oxschool.scss';
import Download from '../include/Download';
import Nav from '../include/Nav';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

const Oxschool = () => {
        return (
            <Fragment>
                <div className="oxschools_section_1">
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
                    <div className="row oxschools_header_box">
                        <Fade left>
                        <div className="col-xl-7 col-md-6 col-sm-12 oxschools_header_left_box">
                                <p className="oxschools_header_left_box_text1">The Complete Cryptocurrency Course: More 
                                than 5 Courses in 1</p>
                                <p className="oxschools_header_left_box_text2">Learn everything you need to know about cryptocurrency and blockchain, including investing, 
                                    mining and much more!</p>
                                <p className="oxschools_header_left_box_text3">
                                    <img className="oxschools_star_margin" src="assets/img/oxschool/Icon awesome-star.png" alt=""/>
                                    <img className="oxschools_star_margin" src="assets/img/oxschool/Icon awesome-star.png" alt=""/>
                                    <img className="oxschools_star_margin" src="assets/img/oxschool/Icon awesome-star.png" alt=""/>
                                    <img className="oxschools_star_margin" src="assets/img/oxschool/Icon awesome-star.png" alt=""/>
                                    <img className="oxschools_star_margin" src="assets/img/oxschool/Icon awesome-star.png" alt=""/> (10,271 ratings)  <span className="oxschools_star_text"> 117,455 students</span></p>
                                <p className="oxschools_header_left_box_text2">Created by</p>
                                <div className="oxschools_creater_panel">
                                    <div className="oxschools_creater_img"><img src="assets/img/oxschool/Ellipse 37.png" alt="" /></div>
                                    <div>
                                        <p className="oxschools_creater_name">Chris Haroun</p>
                                        <p className="oxschools_creater_date">Last updated 7/2021</p>
                                    </div>
                                </div>
                        </div>
                        </Fade>
                        <Fade top>
                        <div className="col-xl-5 col-md-6 col-sm-12 oxschools_intro_video">
                            <div className="oxschools_intro_video_img">
                            <img className="img-fluid" src="assets/img/oxschool/video-ilstation.png" alt="" />
                            <div className="oxschools_play_panel">
                                <img className="img-fluid" src="assets/img/oxschool/Icon awesome-play-circle.png" alt="" />
                                <p className="oxschools_watch_intro_text">Watch intro Video</p>
                            </div>
                            </div>
                            <div className="oxschools_price_panel">
                            <div className="oxschools_price_panel1">
                                <p className="oxschools_price_100">$100</p>
                                <p className="oxschools_price_300"><del>$300</del></p>
                            </div>
                            <p className="oxschools_price_hours">12 hours left at this price!</p>
                            <div className="oxschools_submit_form"><button type="button" className="oxschools_submit_btn">Buy Now</button></div>
                            </div>
                        </div>
                        </Fade>
                    </div>
                    </div>
                </div>

                <div className="oxschools_section2">
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-md-6 oxschools_learn_panel">
                        <Fade bottom>
                        <p className="oxschools_learn_text">What you'll learn</p>
                        <div className="row">
                            <div className="col-xl-6 col-md-12">
                                <div className="oxschools_check_panel">
                                    <img className="img-fluid oxschools_check_img" src="assets/img/oxschool/Icon awesome-check-double.png" alt="" />
                                    <p className="oxschools_check_text">1Upon completion of this course, students will be 
                                    able to invest, mine, trade and thoroughly understand 
                                    cryptocurrencies</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <div className="oxschools_check_panel">
                                    <img className="img-fluid oxschools_check_img" src="assets/img/oxschool/Icon awesome-check-double.png" alt="" />
                                    <p className="oxschools_check_text">2Understand what makes a great cryptocurrency as a 
                                    great long term investment</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <hr className="oxschools_check_hr" />
                                <div className="oxschools_check_panel">
                                    <img className="img-fluid oxschools_check_img" src="assets/img/oxschool/Icon awesome-check-double.png" alt="" />
                                    <p className="oxschools_check_text">3Understand what are the biggest mistakes new investors 
                                    make in cryptocurrencies?</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <hr className="oxschools_check_hr" />
                                <div className="oxschools_check_panel">
                                    <img className="img-fluid oxschools_check_img" src="assets/img/oxschool/Icon awesome-check-double.png" alt="" />
                                    <p className="oxschools_check_text">4Know how to watch out for scams and managing risk</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <hr className="oxschools_check_hr" />
                                <div className="oxschools_check_panel">
                                    <img className="img-fluid oxschools_check_img" src="assets/img/oxschool/Icon awesome-check-double.png" alt="" />
                                    <p className="oxschools_check_text">5Understand what are the biggest mistakes new investors 
                                    make in cryptocurrencies?</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <hr className="oxschools_check_hr" />
                                <div className="oxschools_check_panel">
                                    <img className="img-fluid oxschools_check_img" src="assets/img/oxschool/Icon awesome-check-double.png" alt="" />
                                    <p className="oxschools_check_text">6Know how to watch out for scams and managing risk</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                            <div className="oxschools_learn_form"><button type="button" className="oxschools_learn_btn">Read More</button></div>
                            </div>
                        </div>
                        </Fade>
                        <Fade left>
                        <p className="oxschools_description_text">Description</p>
                        <p className="oxschools_description_text_detail">By an Award Winning MBA professor who is a top selling online business teacher, top selling author, 
                            former Goldman Sachs employee, Columbia MBA (finance major) and venture capitalist who has invested 
                            In and sat on the boards of cryptocurrency companies since 2013 and a hedge fund industry veteran and 
                            founder. He is also the author of the #1 best selling business course on OX stocks.</p>
                        </Fade>
                        <Fade right>
                        <p className="oxschools_crypto_text">THIS COMPLETE CRYPTOCURRENCY COURSE is 5+ courses in 1!</p>
                        <p className="oxschools_crypto_menu">1. Cryptocurrency Investing</p>
                        <p className="oxschools_crypto_menu">2. Cryptocurrency Mining</p>
                        <p className="oxschools_crypto_menu">3. Cryptocurrency Wallets </p>
                        <p className="oxschools_crypto_menu">4. Cryptocurrency Exchanges</p>
                        <p className="oxschools_crypto_menu">5. Blockchain</p>
                        <p className="oxschools_crypto_menu">6. Creating a Diversified Portfolio & Much More!</p>
                        

                        <p className="oxschools_crypto_detail">Also included in this course is a very comprehensive Excel spreadsheet that contains more than 30 
                            Cryptocurrency exercises to help you learn everything you need to know about cryptocurrencies (whether
                            you are a beginner or an advanced user). No prior cryptocurrency or finance or accounting or tech or 
                            Excel experience is required to take this course. </p>
                        </Fade>
                        <Fade top>
                        <p className="oxschools_crypto_text">We Will Cover More than 10 Cryptocurrencies in this Course (and how
                            to buy & sell each one, what are the pros and cons of each one and 
                        how to mine each one):</p>
                        
                        <p className="oxschools_crypto_menu">1. Bitcoin</p>
                        <p className="oxschools_crypto_menu">2. Ethereum</p>
                        <p className="oxschools_crypto_menu">3. Ripple</p>
                        <p className="oxschools_crypto_menu">4. Litecoin</p>
                        <p className="oxschools_crypto_menu">5. Monero</p>
                        <p className="oxschools_crypto_menu">6. Zcash</p>
                        <p className="oxschools_crypto_menu">7. Dash</p>
                        <p className="oxschools_crypto_menu">8. NEO</p>
                        <p className="oxschools_crypto_menu">9. Cardano</p>
                        <p className="oxschools_crypto_menu">10. Stellar</p>
                        <p className="oxschools_crypto_menu">11. ...and more (this course will constantly be updated with more cryptocurrencies)</p>

                        <div className="row oxschools_crypto_form">
                            <button type="button" className="oxschools_crypto_btn">Read More</button>
                        </div>
                        </Fade>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div className="oxschools_section4">
                    <div className="container">
                        <Fade top><Download /></Fade>
                    </div>
                </div>
            </Fragment>
        )
}

export default Oxschool;