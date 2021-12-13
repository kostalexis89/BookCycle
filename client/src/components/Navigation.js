import React from 'react'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import { AuthContext } from '../context/auth'
import Navbar from 'react-bootstrap/Navbar'
import { Offcanvas } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

export default function Navigation() {

const {isLoggedIn, user, logoutUser} = useContext(AuthContext)

    console.log(user)
    return (
        <Navbar bg="dark" expand={false} variant="dark">
  <Container fluid>
    <Navbar.Brand href="#">BookCycle</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel" 
      placement="end"
      
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Welcome to BookCycle</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className='sidebar'>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Link to='/' className="menuLinks">Home</Link>
          {isLoggedIn ? (
              <>
            <NavDropdown title="My BookCycle" id="dropdown">
                <Link to='/myLibrary' className='dropdown-item'>Add New</Link>
                <Link to='/myLibrary' className='dropdown-item'>My Library</Link>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                Requests
                </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                    Pending Requests
                </NavDropdown.Item>
            </NavDropdown>
            <Link to="#" className="menuLinks" onClick={logoutUser}>Logout</Link>
            </>
          ) : (
              <>
            <Link to='/signup' className="menuLinks">Sign Up</Link>
            <Link to='/login' className="menuLinks">Log In</Link>
            </>
          )}
          
          
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    )
}