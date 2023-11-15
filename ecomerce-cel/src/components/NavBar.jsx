import { NavLink } from "react-router-dom";
import { CartWidget } from "./CartWidget"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
    return(
        <header>

    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            
            <NavLink to="/">Ecomerce</NavLink>
          
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="categoria/iphone">Iphone</NavLink>
            <NavLink to="categoria/samsung">Samsung</NavLink>
            <NavLink to="categoria/otros">Otros</NavLink>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
            
        </header>
    )
}