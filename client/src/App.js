import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './components/home/Dashboard';
import Crypto from './components/home/Crypto';
import Aboutus from './components/home/Aboutus';
import Contactus from './components/home/Contactus';
import Oxlabs from './components/home/Oxlabs';
import Oxschools from './components/home/Oxschool';
import Oxchain from './components/home/Oxchain';
import Footer from './components/include/Footer';
import Terms from './components/home/Footer/Terms';
import Privacy from './components/home/Footer/Privacy';
// market
import Marketplace from './components/home/marketplace/Marketplace';
import MarketplaceDetail from "./components/home/marketplace/Marketplace_detail";
import MarketplaceCategory from './components/home/marketplace/Marketplace_category';
// market
// Location
import Location from './components/home/Location';
// Location
//auth
import Login from './components/auth/Login';
import Register from './components/auth/Register';
//auth

class App extends Component {
  render() {
    return (
        <Router>
            <Routes>
              <Route exact path="/" element={ <Dashboard /> } />
              <Route exact path="/crypto" element={ <Crypto /> } />
              <Route exact path="/aboutus" element={ <Aboutus /> } />
              <Route exact path="/contactus" element={ <Contactus /> } />
              <Route exact path="/oxlabs" element={ <Oxlabs /> } />
              <Route exact path="/oxschools" element={ <Oxschools /> } />
              <Route exact path="/oxchain" element={ <Oxchain /> } />
              <Route exact path="/terms" element={ <Terms /> } />
              <Route exact path="/privacy" element={ <Privacy /> } />
              <Route exact path="/login" element={ <Login /> } />
              <Route exact path="/register" element={ <Register /> } />
              <Route exact path="/marketplace" element={ <Marketplace /> } />
              <Route exact path="/marketplaceDetail" element={ <MarketplaceDetail /> } />
              <Route exact path="/marketplaceCategory" element={ <MarketplaceCategory /> } />
              <Route exact path="/location" element={ <Location /> } />
            </Routes>
            <Footer />
        </Router>
    )
  }
}

export default App;