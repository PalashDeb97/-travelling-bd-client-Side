import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Travelling BD</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link className="text-light"  as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="text-light" as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link className="text-light" as={Link} to="/about">About</Nav.Link>
                        <Nav.Link className="text-light" as={Link} to="/contact">Contact</Nav.Link>

                        {
                            user?.email && <Nav.Link className="text-light" as={Link} to="/bookinghistory">My Booking</Nav.Link>
                        }
                        
                        
                        <Navbar.Text>
                            <a href="#login" className="me-3">{user?.displayName}</a>
                        </Navbar.Text>
                        
                        {user?.email ?
                            <Button onClick={logOut} variant="warning" className="text-light">Logout</Button>
                             :
                            <Nav.Link className="text-light btn btn-warning" as={Link} to="/login">Login</Nav.Link>
                        }
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;