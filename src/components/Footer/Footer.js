import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark pt-5 pb-1 text-light">
            <Container>
                <Row>
                    <Col xs={{ order: 'first' }}>
                        <h3>Travelling BD</h3>
                        <p className="text-color">Bangladesh, to the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many waterways. Its Padma (Ganges) the Sundarbans, an enormous mangrove forest shared with Eastern India, is home to the royal Bengal tiger. </p>
                    </Col>
                    <Col xs>
                        <h4 className="title-color">Footer Navbar</h4>
                        <Stack gap={3}>
                            <NavLink
                            className="text-light text-decoration-none"
                            to="/home"
                            >
                            - Home
                            </NavLink>
                            <NavLink
                            className="text-light text-decoration-none"
                            to="/services"
                            >
                            - Services
                            </NavLink>
                            <NavLink
                            className="text-light text-decoration-none"
                            to="/about"
                            >
                            - About
                            </NavLink>
                            <NavLink
                            className="text-light text-decoration-none"
                            to="/contact"
                            >
                            - Contact
                            </NavLink>
                        </Stack>
                    </Col>
                    <Col xs={{ order: 'last' }}>
                        <h4 className="btn-color">News Letter</h4>
                    </Col>
                </Row>
                <p className="text-light text-center mt-5">Copyright 2021 by Palash</p>
            </Container>
        </div>
    );
};

export default Footer;