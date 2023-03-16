import CardWidget from "../CardWidget";
import "./navBar.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavBar(){
    return (
        
           <Navbar sticky="top" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Puma</Nav.Link>
            <Nav.Link href="#features">Nike</Nav.Link>
            <Nav.Link href="#pricing">Adidas</Nav.Link>
          </Nav>
          <CardWidget/>
        </Container>
      </Navbar>
          
   
     );

}
export default NavBar;