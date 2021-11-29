import React, { Fragment } from 'react';
import Nav from '../../include/Nav';
import { Link } from 'react-router-dom';
import Resbtn from '../../include/Resbtn';
import "../../../assets/css/home/marketplace/Marketplace.scss";
import Download from '../../include/Download';

const Marketplace = () => {
    return (
        <Fragment>
            <div className="market_section_1">
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
                    <div className="row market_logo_title">
                        <p className="market_logo_title2">List & Sell Your Digital</p>
                        <p className="market_logo_title2">Assets Here</p>
                        <p className="market_logo_title3">Get paid in Ox Coin when selling your assets with us.</p>
                        <button className="market_explore_btn">Explore</button>
                    </div>
                </div>
            </div>
            <div className="market_section2">
                <div className="container">
                    <p className="market_newItems">New Items</p>
                    <div className="row">
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="market_item">
                                <div className="market_item_top">
                                    <img className="img-fluid" src="assets/img/market/iconox.png" width="120px" height="120px" alt="" />
                                    <p className="market_item_top_txt1">nipify.com</p>
                                    <p className="market_item_top_txt2">www.oxstocks.com</p>
                                </div>
                                <p className="market_item_top_txt1">nipify.com</p>
                                <p className="market_item_top_txt2">1154 OX</p>
                                <button className="marketBuy_btn">Buy Now</button>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="market_item">
                                <div className="market_item_top">
                                    <img className="img-fluid" src="assets/img/market/iconox.png" width="120px" height="120px" alt="" />
                                    <p className="market_item_top_txt1">footballtouring.com</p>
                                    <p className="market_item_top_txt2">www.oxstocks.com</p>
                                </div>
                                <p className="market_item_top_txt1">footballtouring.com</p>
                                <p className="market_item_top_txt2">1154 OX</p>
                                <button className="marketBuy_btn">Buy Now</button>
                            </div>
                        </div><div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="market_item">
                                <div className="market_item_top">
                                    <img className="img-fluid" src="assets/img/market/iconox.png" width="120px" height="120px" alt="" />
                                    <p className="market_item_top_txt1">site-task.com</p>
                                    <p className="market_item_top_txt2">www.oxstocks.com</p>
                                </div>
                                <p className="market_item_top_txt1">site-task.com</p>
                                <p className="market_item_top_txt2">1154 OX</p>
                                <button className="marketBuy_btn">Buy Now</button>
                            </div>
                        </div><div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="market_item">
                                <div className="market_item_top">
                                    <img className="img-fluid" src="assets/img/market/iconox.png" width="120px" height="120px" alt="" />
                                    <p className="market_item_top_txt1">mealscombined.com</p>
                                    <p className="market_item_top_txt2">www.oxstocks.com</p>
                                </div>
                                <p className="market_item_top_txt1">topservicehits.com</p>
                                <p className="market_item_top_txt2">1154 OX</p>
                                <button className="marketBuy_btn">Buy Now</button>
                            </div>
                        </div><div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="market_item">
                                <div className="market_item_top">
                                    <img className="img-fluid" src="assets/img/market/iconox.png" width="120px" height="120px" alt="" />
                                    <p className="market_item_top_txt1">topservicehits.com</p>
                                    <p className="market_item_top_txt2">www.oxstocks.com</p>
                                </div>
                                <p className="market_item_top_txt1">topservicehits.com</p>
                                <p className="market_item_top_txt2">1154 OX</p>
                                <button className="marketBuy_btn">Buy Now</button>
                            </div>
                        </div><div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="market_item">
                                <div className="market_item_top">
                                    <img className="img-fluid" src="assets/img/market/iconox.png" width="120px" height="120px" alt="" />
                                    <p className="market_item_top_txt1">footballviral.com</p>
                                    <p className="market_item_top_txt2">www.oxstocks.com</p>
                                </div>
                                <p className="market_item_top_txt1">footballviral.com</p>
                                <p className="market_item_top_txt2">1154 OX</p>
                                <button className="marketBuy_btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container" style={{ marginTop: "10%" }}>
                    <p className="market_shop_title">Shop By Categories</p>
                    <div className="row">
                        <div className="col-xl-3 col-md-3">
                            <div className="market_shop_box">
                                <img className="img-fluid" src="assets/img/market/NFT.png" alt=""/>
                                <p className="market_shop_box_title">NFT</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-3">
                            <div className="market_shop_box">
                                <img className="img-fluid" src="assets/img/market/Domains.png" alt=""/>
                                <p className="market_shop_box_title">Domains</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-3">
                            <div className="market_shop_box">
                                <img className="img-fluid" src="assets/img/market/Technical.png" alt=""/>
                                <p className="market_shop_box_title">Technical</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-3">
                            <div className="market_shop_box">
                                <img className="img-fluid" src="assets/img/market/Appanel.png" alt=""/>
                                <p className="market_shop_box_title">Appanel</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container" style={{ marginTop: "10%" }}>
                    <p className="market_shop_title">Sell Your Assets Here</p>
                    <div className="row">
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="market_sell_box">
                                <img className="img-fluid" src="assets/img/market/wide.png" alt=""/>
                                <div className="market_sell_box_label">
                                    <p className="text1">Wide Range</p>
                                    <p className="text2">We have a large range of digital assets including NFT’s, Websites, Domains and Music.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="market_sell_box">
                                <img className="img-fluid" src="assets/img/market/wide.png" alt=""/>
                                <div className="market_sell_box_label">
                                    <p className="text1">Buy & Sell</p>
                                    <p className="text2">By using Ox Coin, you can confidently buy and sell on our marketplace.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="market_sell_box">
                                <img className="img-fluid" src="assets/img/market/wide.png" alt=""/>
                                <div className="market_sell_box_label">
                                    <p className="text1">Store Securely</p>
                                    <p className="text2">Create an account to keep your digital assets safe with your Ox Wallet</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <Download />
                </div>
            </div>
        </Fragment>
    )
}

export default Marketplace;