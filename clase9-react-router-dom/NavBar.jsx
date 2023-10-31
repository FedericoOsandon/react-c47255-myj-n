// import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from "../CartWidget/CartWidget"
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    // console.log(children)
    return (
        <>
             <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className={({isActive})=> isActive ? 'btn btn-outline-primary' : 'btn'} to="/">Inicio</NavLink>
                        <NavLink className={({isActive})=> isActive ? 'btn btn-outline-primary' : 'btn'} to='/category/gorras'>
                            Gorras
                        </NavLink>
                        {/* /category/:cid */}
                        <NavLink className={({isActive})=> isActive ? 'btn btn-outline-primary' : 'btn'} to='/category/remeras'>
                            Remeras
                        </NavLink>
{/*                        
                        <NavDropdown title="Categorías" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Todas</NavDropdown.Item>
                            
                            
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        {/* <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                        </Nav.Link> */}
                        <Link to='/cart'>
                            <CartWidget />
                        </Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </>

    )
}

export default NavBar

// jsx === js