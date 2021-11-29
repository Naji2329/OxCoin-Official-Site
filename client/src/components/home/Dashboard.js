import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/home/Dashboard.scss';
import Nav from '../include/Nav';

import { Bounce, Slide, Fade }  from "react-reveal";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Resbtn from '../include/Resbtn';
import FAQ from '../include/FAQ';

const Dashboard = () => {

        const settings = {
            // dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            // arrows: false,

            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 766,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 603,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                  }
                },
              ]
          };
          
        return (
            <Fragment>
                <div className="dash_section_1">
                {/* <Bounce top  delay = { 500 } duration = { 1000 }><img className="img-fluid dash_building_santa_icon" src="assets/img/index/santa.png" width="25%" height="25%" alt="" /></Bounce> */}
                    <div className="container">
                        <div id="nav_box1" style={{display: "flex", justifyContent: "flex-end", alignItems: "center", position: "relative"}}>
                            <Link to="/"><img className="img-fluid" src="assets/img/index/logo.png" width="200" height="30" alt="" style={{ position: "absolute", top: "40%", left: "0" }} /></Link>
                            <Nav />
                            <Link to="" className="nav-link wallet_btn wallet_btn_fontColor" href="#">&nbsp;&nbsp;<img className="img-fluid" src="assets/img/index/Icon awesome-wallet.png" width="21.78" height="19.05"  alt="" />&nbsp;&nbsp;Wallet</Link>
                            <Link to="" className="nav-link account_btn dropdown-toggle" href="#" >
                            &nbsp;&nbsp;<img className="img-fluid" src="assets/img/index/Icon awesome-user-alt.png" width="19.05" height="19.05" alt="" />&nbsp;&nbsp;Account
                            </Link>
                        </div>
                        <div id="nav_box2" style={{display: "none", justifyContent: "flex-end", alignItems: "center", position: "relative"}}>
                            <Link to="/"><img className="img-fluid" src="assets/img/index/logo.png" width="200" height="30" alt="" style={{ position: "absolute", top: "40%", left: "0" }} /></Link>
                            {/* <Link to="" className="nav-link navbar_rightbox" href="#" > */}
                            {/* &nbsp;&nbsp;<img className="img-fluid" src="assets/img/index/Icon awesome-user-alt.png" width="19.05" height="19.05" alt="" />&nbsp;&nbsp;Account */}
                                {/* <span style={{fontSize:'30px', cursor: 'pointer'}} onclick="openNav()">&#9776;</span> */}
                            {/* </Link> */}
                            <Resbtn />
                        </div>
                        <div className="row dash_logo_title">
                            <p className="dash_logo_title1">Where Aussie’s</p>
                            <p className="dash_logo_title2">Buy/Sell Crypto & Digital Assets</p>
                        </div>
                        <div className="row dash_building_panel">
                            <Slide bottom delay = { 300 } duration = { 1000 }>
                                <img className="img-fluid dash_building_img " src="assets/img/index/banner_img.png" alt=""/>
                            </Slide>
                            <div>
                                <Bounce top  delay = { 4500 } duration = { 1000 }><img className="img-fluid dash_building_btc_icon" src="assets/img/index/btc.png" width="4%" height="4%" alt="" /></Bounce>
                                <Bounce top  delay = { 2500 } duration = { 1000 }><img className="img-fluid dash_building_eth_icon" src="assets/img/index/eth.png" width="4%" height="4%" alt="" /></Bounce>
                                <Bounce top  delay = { 2000 } duration = { 1000 }><img className="img-fluid dash_building_bnb_icon" src="assets/img/crypto/bnb.png" width="4%" height="4%" alt="" /></Bounce>
                                <Bounce top  delay = { 3500 } duration = { 1000 }><img className="img-fluid dash_building_usdt_icon" src="assets/img/crypto/usdt.png" width="4%" height="4%" alt="" /></Bounce>
                                <Bounce top  delay = { 1000 } duration = { 1000 }><img className="img-fluid dash_building_ox_icon" src="assets/img/crypto/ox.png" width="6%" height="6%" alt="" /></Bounce>
                                <Bounce top  delay = { 4000 } duration = { 1000 }><img className="img-fluid dash_building_euro_icon" src="assets/img/crypto/euro.png" width="5%" height="5%" alt="" /></Bounce>
                                <Bounce top  delay = { 3000 } duration = { 1000 }><img className="img-fluid dash_building_gbp_icon" src="assets/img/crypto/gbp.png" width="5%" height="5%" alt="" /></Bounce>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="dash_section_2">

                    <div className="container dash_section_2_relative">

                    <div className="row" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                        {/* <img className="dash_prev_item img-fluid" src="assets/img/index/left_icon.png" width="44" height="44"  alt=""/> */}
                        <Fade left>
                        <Slider {...settings}>
                            
                            <div className="dash_item-group">
                                <div className="dash_image_item">
                                    <img className="dash_market_img img-fluid" src="assets/img/index/Market-News.png"  alt=""/>
                                    <img className="dash_path_img img-fluid" src="assets/img/index/Path 28830.png"  alt=""/>
                                </div>
                                <span className="dash_comment_text1">Market News</span>
                            </div>
                            
                            
                            <div className="dash_item-group">
                                <div className="dash_image_item">
                                    <img className="dash_market_img img-fluid" src="assets/img/index/Crypto-Marketplace.png"  alt=""/>
                                    <img className="dash_path_img img-fluid" src="assets/img/index/Path 28830.png"  alt=""/>
                                </div>
                                <span className="dash_comment_text1">Crypto Marketplace</span>
                            </div>
                            
                            <div className="dash_item-group">
                                <div className="dash_image_item">
                                    <img className="dash_market_img img-fluid" src="assets/img/index/Mining-Cloud.png"  alt=""/>
                                    <img className="dash_path_img img-fluid" src="assets/img/index/Path 28830.png"  alt=""/>
                                </div>
                                <span className="dash_comment_text1">Mining Cloud</span>
                            </div>
                            
                            <div className="dash_item-group">
                                <div className="dash_image_item">
                                    <img className="dash_market_img img-fluid" src="assets/img/index/Market-News.png"  alt=""/>
                                    <img className="dash_path_img img-fluid" src="assets/img/index/Path 28830.png"  alt=""/>
                                </div>
                                <span className="dash_comment_text1">Market News</span>
                            </div>
                            
                            <div className="dash_item-group">
                                <div className="dash_image_item">
                                    <img className="dash_market_img img-fluid" src="assets/img/index/Market-News.png"  alt=""/>
                                    <img className="dash_path_img img-fluid" src="assets/img/index/Path 28830.png"  alt=""/>
                                </div>
                                <span className="dash_comment_text1">Market News</span>
                            </div>
                            
                            <div className="dash_item-group">
                                <div className="dash_image_item">
                                    <img className="dash_market_img img-fluid" src="assets/img/index/Market-News.png"  alt=""/>
                                    <img className="dash_path_img img-fluid" src="assets/img/index/Path 28830.png"  alt=""/>
                                </div>
                                <span className="dash_comment_text1">Market News</span>
                            </div>
                            
                            
                        </Slider>
                        </Fade>
                    </div>

                    <div className="row dash_news_content">
                        <p className="dash_news_text">News</p>
                    </div>
                    
                    <div className="row">
                        <Fade left>
                            <div className="col-md-4 dash_news_box">
                                <div className="dash_section2_box">
                                    <p className="dash_section2_news1_text">MARKET</p>
                                    <p className="dash_section2_news2_text">Ethereum Founder Vitalik Buterin Namedto Time 
                                    Magazine’s ‘Most Influential’ List</p>
                                    <p className="dash_section2_news3_text">OX STOCKS 26    |   October 2021</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="col-md-4 dash_news_box">
                                <div className="dash_section2_box">
                                    <p className="dash_section2_news1_text">MARKET</p>
                                    <p className="dash_section2_news2_text">Ethereum Founder Vitalik Buterin Namedto Time 
                                    Magazine’s ‘Most Influential’ List</p>
                                    <p className="dash_section2_news3_text">OX STOCKS 26    |   October 2021</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="col-md-4 dash_news_box">
                                <div className="dash_section2_box">
                                    <p className="dash_section2_news1_text">MARKET</p>
                                    <p className="dash_section2_news2_text">Ethereum Founder Vitalik Buterin Namedto Time 
                                    Magazine’s ‘Most Influential’ List</p>
                                    <p className="dash_section2_news3_text">OX STOCKS 26    |   October 2021</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="row">
                        <p className="dash_section2_readmore">Read more</p>
                    </div>

                    <div className="row">
                        <p className="dash_section2_cryptoleaders">Crypto Leaders</p>
                    </div>

                    <div className="row dash_crypto_row_head">
                        <div className="dash_cryptoitem">Name</div>
                        <div className="dash_cryptoitem">Last Price</div>
                        <div className="dash_cryptoitem">24h Change</div>
                        <div className="dash_cryptoitem">Markets</div>
                    </div>
                    <div className="row dash_crypto_row">
                        <div className="dash_cryptoitem_body">
                            <img className="img-fluid" src="assets/img/index/btc.png" width="37" height="37" alt=""/>
                            <div className="dash_img_right_item1">
                            <label className="dash_img_right_item1_text1">Bitcoin</label>
                            <label className="dash_img_right_item1_text2">BTC</label>
                            </div>
                        </div>
                        <div className="dash_cryptoitem_body">
                        <label className="dash_img_right_item1_text1">A$62.215K</label>
                        </div>
                        <div className="dash_cryptoitem_body">
                        <label className="dash_img_right_item1_text1">3.22%</label>
                        </div>
                        <div className="dash_cryptoitem_body">
                        <img className="img-fluid" src="assets/img/index/Path 67.png"  alt=""/>
                        </div>
                        <div className="dash_cryptoitem_body">
                        <button type="button" className="dash_buy_btn">Buy</button>
                        </div>
                    </div>
                    <div className="row dash_crypto_row">
                        <div className="dash_cryptoitem_body">
                            <img className="img-fluid" src="assets/img/index/eth.png" width="33" height="33" alt=""/>
                            <div className="dash_img_right_item1">
                            <label className="dash_img_right_item1_text1">Ethereum</label>
                            <label className="dash_img_right_item1_text2">ETH</label>
                            </div>
                        </div>
                        <div className="dash_cryptoitem_body">
                        <label className="dash_img_right_item1_text1">A$62.215K</label>
                        </div>
                        <div className="dash_cryptoitem_body">
                        <label className="dash_img_right_item1_text1">3.22%</label>
                        </div>
                        <div className="dash_cryptoitem_body">
                        <img className="img-fluid" src="assets/img/index/Path 67.png"  alt=""/>
                        </div>
                        <div className="dash_cryptoitem_body">
                        <button type="button" className="dash_buy_btn">Buy</button>
                        </div>
                    </div>
                    <div className="row dash_crypto_row">
                        <div className="dash_cryptoitem_body">
                            <img className="img-fluid" src="assets/img/index/bnb.png" width="33" height="33" alt=""/>
                            <div className="dash_img_right_item1">
                            <label className="dash_img_right_item1_text1">Binance Coin</label>
                            <label className="dash_img_right_item1_text2">BNB</label>
                            </div>
                        </div>
                        <div className="dash_cryptoitem_body">
                        <label className="dash_img_right_item1_text1">A$62.215K</label>
                        </div>
                        <div className="dash_cryptoitem_body">
                        <label className="dash_img_right_item1_text1">3.22%</label>
                        </div>
                        <div className="dash_cryptoitem_body">
                        <img className="img-fluid" src="assets/img/index/Path 67.png"  alt=""/>
                        </div>
                        <div className="dash_cryptoitem_body">
                        <button type="button" className="dash_buy_btn">Buy</button>
                        </div>
                    </div>
                    <div className="row dash_crypto_row">
                        <div className="dash_cryptoitem_body">
                            <img className="img-fluid" src="assets/img/index/SHIB.png" width="33" height="33" alt=""/>
                            <div className="dash_img_right_item1">
                            <label className="dash_img_right_item1_text1">Shiba Inu</label>
                            <label className="dash_img_right_item1_text2">SHIB</label>
                            </div>
                        </div>
                        <div className="dash_cryptoitem_body">
                        <label className="dash_img_right_item1_text1">A$62.215K</label>
                        </div>
                        <div className="dash_cryptoitem_body">
                        <label className="dash_img_right_item1_text1">3.22%</label>
                        </div>
                        <div className="dash_cryptoitem_body">
                        <img className="img-fluid" src="assets/img/index/Path 67.png"  alt=""/>
                        </div>
                        <div className="dash_cryptoitem_body">
                        <button type="button" className="dash_buy_btn">Buy</button>
                        </div>
                    </div>
                    
                    <div className="row">
                        <p className="dash_view_more_content">View More</p>
                    </div>

                    <div className="row">
                        <p className="dash_trade_title">Trade. Anywhere.</p>
                        <p className="dash_trade_detail">Compatible with multiple devices, start trading with safety and convenience.</p>
                    </div>

                    <div className="row" style={{marginTop: '3%'}}>
                        <div className="col-xl-6 col-md-6">
                            <img className="img-fluid" src="assets/img/index/ox_phone.png" alt="" />
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <div className="row">
                                <div className="qr_box">
                                    <div><center><img className="img-fluid" src="assets/img/index/QR_ox.png" width="50%" height="50%" alt=""/></center></div>
                                    <div>
                                        <p className="dash_scan_title">Scan to Download</p>
                                        <p className="dash_scan_detail">iOS & Android</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-md-6 col-sm-6">
                                    <div className="dash_apple">
                                        <img className="img-fluid apple_icon" src="assets/img/index/API.png" alt="" />
                                        <p className="dash_apple_txt">Apple Store</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-sm-6">
                                    <div className="dash_apple">
                                        <img className="img-fluid apple_icon" src="assets/img/index/API.png" alt="" />
                                        <p className="dash_apple_txt">Android APK</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-sm-6">
                                    <div className="dash_apple">
                                        <img className="img-fluid apple_icon" src="assets/img/index/API.png" alt="" />
                                        <p className="dash_apple_txt">Google Play</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-sm-6">
                                    <div className="dash_apple">
                                        <img className="img-fluid apple_icon" src="assets/img/index/API.png" alt="" />
                                        <p className="dash_apple_txt">MacOS</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-sm-6">
                                    <div className="dash_apple">
                                        <img className="img-fluid apple_icon" src="assets/img/index/API.png" alt="" />
                                        <p className="dash_apple_txt">Windows</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-sm-6">
                                    <div className="dash_apple">
                                        <img className="img-fluid apple_icon" src="assets/img/index/API.png" alt="" />
                                        <p className="dash_apple_txt">Linux</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-sm-6">
                                    <div className="dash_apple">
                                        <img className="img-fluid apple_icon" src="assets/img/index/API.png" alt="" />
                                        <p className="dash_apple_txt">API</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{paddingTop: '5%'}}>
                        <div className="dash_review">
                            <div>
                                <p className="dash_review_title">Hear it from our customers</p>
                                <p className="dash_review_detail">Here's what our customers have to say about there experiences at Coinspot.</p>
                            </div>
                            <div className="dash_review_rating">
                                <div>
                                    <p className="dash_rating_title"><img src="assets/img/oxschool/Icon awesome-star.png" width="20" height="20" style={{ marginTop: '-5px',marginRight: '10px' }} alt=""/>Trustpilot</p>
                                </div>
                                <div>
                                    <p className="dash_rating_num">4 . 5 <img src="assets/img/oxschool/Icon awesome-star.png" style={{ marginTop: '-5px',marginLeft: '10px' }} alt=""/></p>
                                    <p className="dash_rating_count">1442 reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-4 col-md-4 col-sm-12"  style={{ marginBottom: "20px" }}>
                            <div className="dash_review_box">
                                <div className="dash_review_box_icon">
                                    <img src="assets/img/oxschool/Icon awesome-star.png" style={{ marginRight: '10px' }} alt=""/>
                                    <img src="assets/img/oxschool/Icon awesome-star.png" style={{ marginRight: '10px' }} alt=""/>
                                    <img src="assets/img/oxschool/Icon awesome-star.png" style={{ marginRight: '10px' }} alt=""/>
                                    <img src="assets/img/oxschool/Icon awesome-star.png" style={{ marginRight: '10px' }} alt=""/>
                                    <img src="assets/img/oxschool/Icon awesome-star.png" style={{ marginRight: '10px' }} alt=""/>
                                </div>
                                <div className="dash_review_box_comment">
                                    <p>The fees are very reasonable and I am able to trade lesser known coins like verasity very easily.</p>
                                </div>
                                <div className="dash_review_box_bottom">
                                    <p>Albin</p>
                                    <p>Coinspot User</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-12"  style={{ marginBottom: "20px" }}>
                            <div className="dash_review_box">
                                <div className="dash_review_box_icon">
                                    <img src="assets/img/oxschool/Icon awesome-star.png" style={{ marginRight: '10px' }} alt=""/>
                                    <img src="assets/img/oxschool/Icon awesome-star.png" style={{ marginRight: '10px' }} alt=""/>
                                    <img src="assets/img/oxschool/Icon awesome-star.png" style={{ marginRight: '10px' }} alt=""/>
                                    <img src="assets/img/oxschool/Icon awesome-star.png" style={{ marginRight: '10px' }} alt=""/>
                                    <img src="assets/img/oxschool/Icon awesome-star.png" style={{ marginRight: '10px' }} alt=""/>
                                </div>
                                <div className="dash_review_box_comment">
                                    <p>The fees are very reasonable and I am able to trade lesser known coins like verasity very easily.</p>
                                </div>
                                <div className="dash_review_box_bottom">
                                    <p>Albin</p>
                                    <p>Coinspot User</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-12"  style={{ marginBottom: "20px" }}>
                            <div className="dash_review_box">
                                <div className="dash_review_box_icon">
                                    <img src="assets/img/oxschool/Icon awesome-star.png" style={{ marginRight: '10px' }} alt=""/>
                                    <img src="assets/img/oxschool/Icon awesome-star.png" style={{ marginRight: '10px' }} alt=""/>
                                    <img src="assets/img/oxschool/Icon awesome-star.png" style={{ marginRight: '10px' }} alt=""/>
                                    <img src="assets/img/oxschool/Icon awesome-star.png" style={{ marginRight: '10px' }} alt=""/>
                                    <img src="assets/img/oxschool/Icon awesome-star.png" style={{ marginRight: '10px' }} alt=""/>
                                </div>
                                <div className="dash_review_box_comment">
                                    <p>The fees are very reasonable and I am able to trade lesser known coins like verasity very easily.</p>
                                </div>
                                <div className="dash_review_box_bottom">
                                    <p>Albin</p>
                                    <p>Coinspot User</p>
                                </div>
                            </div>
                        </div>
                    </div>

                        <div className="container FAQ_box">
                            <p className="FAQ_text">Frequently asked questions</p>
                            <FAQ />
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: "#20293e" }}>
                    
                </div>
            </Fragment>
        )
}

export default Dashboard;