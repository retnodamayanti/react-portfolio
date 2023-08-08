import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollSpy from 'bootstrap/js/dist/scrollspy';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './styles.css';

const Script = () => {
  useEffect(() => {
    const sideNav = document.body.querySelector('#sideNav');

    if (sideNav) {
      const scrollSpy = new ScrollSpy(document.body, {
        target: '#sideNav',
        rootMargin: '0px 0px -40%',
      });

      // Clean up scrollspy when component unmounts
      return () => {
        scrollSpy.dispose();
      };
    }

    // eslint-disable-next-line
  }, []);

//   const handleNavbarItemClick = () => {
//     const navbarToggler = document.body.querySelector('.navbar-toggler');

//     if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
//       navbarToggler.click();
//     }
//   };

return (
    <Navbar collapseOnSelect expand="lg" id="navbarResponsive">
      <Container>
        <Navbar.Brand href="#home">Your Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          {/* Optional dropdown menu */}
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Script;




