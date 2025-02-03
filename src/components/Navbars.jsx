import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanva from './Offcanva';

function Navbars() {
  return (
    <div>
         <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand href="#home">Fakestore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            
          </Nav>
          <div className="offcans">
            <Offcanva/>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
      
    </div>
  )
}

export default Navbars
