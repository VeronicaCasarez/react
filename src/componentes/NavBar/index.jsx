import CardWidget from "../CardWidget";
import "./navBar.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/images/logo-sweet-world.png"

import { NavLink } from "react-router-dom";


function NavBar(){
    return (
        
           <Navbar sticky="top" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"><NavLink to={'/'} ><img className="logo-style" src={logo} alt="Logo" /></NavLink> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link >
              <NavLink to={'/category/chocolates'}>Chocolates</NavLink>
            </Nav.Link>
            <Nav.Link >
              <NavLink to={'/category/alfajores'}>Alfajores</NavLink>
            </Nav.Link>
            <Nav.Link >
              <NavLink to={'/category/patagonicos'}>Patagonicos</NavLink>
            </Nav.Link>
          </Nav>
          <CardWidget/>
        </Container>
      </Navbar>
          
   
     );

}
export default NavBar;