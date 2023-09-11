import CardWidget from "../CardWidget";
import "./navbar.css";

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
              <NavLink to={'/category/chocolates'} className="nav-bar">Chocolates</NavLink>
            </Nav.Link>
            <Nav.Link >
              <NavLink to={'/category/alfajores'} className="nav-bar">Alfajores</NavLink>
            </Nav.Link>
            <Nav.Link >
              <NavLink to={'/category/patagonicos'}className="nav-bar">Patagonicos</NavLink>

            </Nav.Link>
          </Nav>
          <Nav.Link >
              <NavLink to={'/cart'}className="nav-bar"> <CardWidget/></NavLink>
          </Nav.Link>
         

        </Container>
      </Navbar>
          
   
     );

}
export default NavBar;
