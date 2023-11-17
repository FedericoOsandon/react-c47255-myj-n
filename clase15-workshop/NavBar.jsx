// import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from "../CartWidget/CartWidget"
import { Link, NavLink } from 'react-router-dom';

const categorys = [
    {id: '1', name: 'Gorras', category: 'gorras'},
    {id: '2', name: 'Remera', category: 'remeras'},
    {id: '3', name: 'Pantalón', category: 'pantalones'}

]

function NavBar() {
    return (
        <>
             <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className={({isActive})=> isActive ? 'btn btn-outline-primary' : 'btn'} to="/">Inicio</NavLink>
                        
                        {categorys.map(category =>  <NavLink 
                                                        key={category.id}
                                                        className={({isActive})=> isActive ? 'btn btn-outline-primary' : 'btn'} 
                                                        to={`/category/${category.category}`}
                                                    >
                                                        {category.name}
                                                    </NavLink>
                                        )
                        }
                    </Nav>
                    <Nav>                        
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

