import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [anchorDiscover, setAnchorDiscover] = React.useState(null);
  const [anchorCrypto, setAnchorCrypto] = React.useState(null);
  const [anchorService, setAnchorService] = React.useState(null);
  const openDiscover = Boolean(anchorDiscover);
  const openCryptro = Boolean(anchorCrypto);
  const openService = Boolean(anchorService);
  const handleClickDiscover = (event) => {
    setAnchorDiscover(event.currentTarget);
  };
  const handleCloseDiscover = () => {
    setAnchorDiscover(null);
  };
  const handleClickCrypto = (event) => {
    setAnchorCrypto(event.currentTarget);
  };
  const handleCloseCrypto = () => {
    setAnchorCrypto(null);
  };
  const handleClickService = (event) => {
    setAnchorService(event.currentTarget);
  };
  const handleCloseService = () => {
    setAnchorService(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography size="small" sx={{ ml: 2 }} className="font-white" style={{ marginTop: "7px" }}><Link to="/">Home</Link></Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography onMouseEnter={handleClickDiscover} onClick={handleClickDiscover} size="small" sx={{ ml: 2 }} className="font-white dropdown-toggle">Discover</Typography>
      </Box>
      <Menu
        anchorEl={anchorDiscover}
        open={openDiscover}
        onClose={handleCloseDiscover}
        onClick={handleCloseDiscover}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
          },
        }}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      >
        <div style={{width: "800px", height: "400px", display: "flex"}} onMouseLeave={handleCloseDiscover}>
          <table className="nav-table">
            <tr>
              <td rowSpan={2} style={{width: "33.3%"}}>
                <Link to="/aboutus">
                  <div className="content" >
                    <p className="title">About</p>
                    <span className="detail">Discover the story behind OX STOCKS as a company, beliefs and goals for the future.</span>
                  </div>
                </Link>
              </td>
              <td style={{width: "33.3%"}}>
                <Link to="/">
                  <div className="content1">
                    <p className="title">Locations</p>
                    <span className="detail">Find our Global Offices & Representatives.</span>
                  </div>
                </Link>
              </td>
              <td style={{width: "33.3%"}}>
                <Link to="/">
                  <div className="content1">
                    <p className="title">Partnerships</p>
                    <span className="detail">Can we work together? </span>
                  </div>
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/">
                  <div className="content1">
                    <p className="title">Referral</p>
                    <span className="detail">Be paid to refer people to our platform.</span>
                  </div>
                </Link>
              </td>
              <td>
                <Link to="/contactus">
                  <div className="content1">
                    <p className="title">Contact Us</p>
                  <span className="detail">How can we further assist you?</span>
                  </div>
                </Link>
              </td>
            </tr>
          </table>
        </div>
      </Menu>

      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography onMouseEnter={handleClickCrypto} onClick={handleClickCrypto} size="small" sx={{ ml: 2 }} className="font-white dropdown-toggle">Crypto </Typography>
      </Box>
      <Menu
        anchorEl={anchorCrypto}
        open={openCryptro}
        onClose={handleCloseCrypto}
        onClick={handleCloseCrypto}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
          },
        }}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      >
        <div style={{width: "800px", height: "400px", display: "flex"}} onMouseLeave={handleCloseCrypto}>
          <table className="nav-table">
            <tr>
              <td rowSpan={2} style={{ width: "33.3%" }}>
                <Link to="/marketplace">
                  <div className="content" >
                    <p className="title">Marketplace</p>
                      <span className="detail">Buy/Sell digital assets such as NFT's and domain names.</span>
                  </div>
                </Link>
              </td>
              <td style={{ width: "33.3%" }}>
                <Link to="/crypto">
                  <div className="content1">
                    <p className="title">Buy Crypto</p>
                    <span className="detail">Let's add some crypto to your OX Wallet</span>
                  </div>
                </Link>
              </td>
              <td>
                <Link to="/oxchain">
                  <div className="content1">
                    <p className="title">Mining</p>
                    <span className="detail">Lorem Ipsum is simply dummy text.</span>
                  </div>
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/">
                  <div className="content1">
                    <p className="title">Ox Coin</p>
                    <span className="detail">The premium currency of oxstocks.com</span>
                  </div>
                </Link>
              </td>
              <td>
                <Link to="/">
                  <div className="content1">
                    <p className="title">Markets</p>
                    <span className="detail">Browse Global Crypto Currencies </span>
                  </div>
                </Link>
              </td>
            </tr>
          </table>
        </div>
      </Menu>

      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography onMouseEnter={handleClickService} onClick={handleClickService} size="small" sx={{ ml: 2 }} className="font-white dropdown-toggle">Services  </Typography>
      </Box>
      <Menu
        anchorEl={anchorService}
        open={openService}
        onClose={handleCloseService}
        onClick={handleCloseService}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
          },
        }}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      >
        <div style={{width: "800px", height: "400px", display: "flex"}} onMouseLeave={handleCloseService}>
          <table className="nav-table">
            <tr>
              <td rowSpan={2}>
                <Link to="/oxlabs">
                  <div className="content">
                    <p className="title">Labs</p>
                    <span className="detail">Where our engineers live and work 24/7. Browse our upcoming projects and reach out to us if you have a crypto project idea.</span>
                  </div>
                </Link>
              </td>
              <td rowSpan={2}>
                <Link to="/oxschools">
                  <div className="content">
                    <p className="title">School</p>
                    <span className="detail">Learn everything about our crypto currency and the future of digital currencies. Pick up some useful tips when using our platform.</span>
                  </div>
                </Link>
              </td>
            </tr>
          </table>
        </div>
      </Menu>
    </React.Fragment>
  );
}

export default Nav;
