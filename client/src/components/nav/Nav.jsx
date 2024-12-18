import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap';
import { NavLink, useLocation , useNavigate } from 'react-router-dom';
import logo from '/logo.png';
import './nav.css'
import Logo from '../../logo';
const AppNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setShowOffcanvas(false);
  }, [location]);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  return (
    <div className="appNavBar">
      <Navbar bg="light" variant="light" expand="lg" sticky="top">
        <Navbar.Brand href="/" className="me-auto">
          {/* <Logo/> */}
          <img src='/logo.svg' height='50' className='logo'/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShowOffcanvas} />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={showOffcanvas}
          onHide={handleCloseOffcanvas}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Home Decor</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="mx-auto links">
              <NavLink to="/our-approach" className="navLink" onClick={handleCloseOffcanvas}>
                OUR works
              </NavLink>
              <NavLink to="/aboutUs" className="navLink" onClick={handleCloseOffcanvas}>
                About Us
              </NavLink>
              <NavLink to="/luxuryWallpaper" className="navLink" onClick={handleCloseOffcanvas}>
              luxury Wallpaper
              </NavLink>
              <NavLink to="/premiumWallpaper" className="navLink" onClick={handleCloseOffcanvas}>
              premium Wallpaper
              </NavLink>
              <NavLink to="/homeAccessories" className="navLink" onClick={handleCloseOffcanvas}>
              home Accessories
              </NavLink>
              <button className="ms-2 hide res-show" onClick={()=>{navigate('/contactUs')}}>
          Contact
        </button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

        <button className="ms-2 res-hide" onClick={()=>{navigate('/contactUs')}}>
          Contact
        </button>
      </Navbar>
    </div>
  );
};

export default React.memo(AppNavbar);
