import React , { Fragment } from 'react';
import "../../../assets/css/home/marketplace/MarketplaceDetail.scss";
import { Link } from 'react-router-dom';
import Nav from '../../include/Nav';
import Resbtn from '../../include/Resbtn';
import Download from '../../include/Download';

const MarketplaceDetail = () => {
    return (
        <Fragment>
            <div className="marketDetail_section_1">
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
                </div>
            </div>
            <div className="marketDetail_section_2">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <div className="marketDetail_box_left">
                                <img className="img-fluid" src="assets/img/market/iconox.png" width="30%" height="30%" />
                                <p className="title1">nipify.com</p>
                                <p className="title2">www.oxstocks.com</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 marketDetail_box_right">
                            <div className="padding">
                                <p className="title">nipify.com</p>
                                <div className="panel">
                                    <img className="img-fluid" src="assets/img/market/iconox.png" width="15%" height="15%"/>
                                    <p>1154 OX</p>
                                </div>
                                <button type="button" className="market_buy_btn">Buy Now</button>
                                <p className="coming">Coming Soon</p>
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

export default MarketplaceDetail;