import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from react-router-dom

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Get the current location using useLocation()

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  useEffect(() => {
    // Update activeLink state based on the current pathname
    if (location.pathname === '/') {
      setActiveLink('home');
    } else if (location.pathname === '/skills') {
      setActiveLink('skills');
    } else if (location.pathname === '/projects') {
      setActiveLink('projects');
    }
  }, [location.pathname])

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" to="/projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#blog" to="/projects" className={activeLink === 'blogs' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('blog')}>Blog</Nav.Link>
            <Nav.Link href="#connect" to="/projects" className={activeLink === 'blogs' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('blog')}>Connect</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/shreya-ghimiree/" target="_blank"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/shreya-ghimire" target="_blank"><img id="git" src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/shreyaghimiree/"  target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
            {/* Use Link from react-router-dom to navigate to /resume */}
            <Link to='/resume'>
              <button className="vvd"><span>Resume</span></button>
            </Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
