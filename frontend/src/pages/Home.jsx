import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate()
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    const moveList = () => {
        navigate('/BookLists')
    }
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" style={{ width: '100%' }}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/BookLists">Book Lists</Nav.Link>
                        <NavDropdown title="Actions" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/AddBooks">Add Books</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/Contacts">Contacts</Nav.Link>
                        <Nav.Link href="/About">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button variant="outline-light" className="ml-auto" style={{ marginRight: '25px' }}>Go Back</Button>
            </Navbar>
            <div style={{ textAlign: 'center', marginTop: '180px' }}>
                <h1 style={{ color: '#7BC9FF' }}>Welcome To Book Library</h1>
                <br />
                <p style={{ color: '#8576FF' }}>"Books are the quietest and most constant of friends; <br />they are the most accessible and wisest of counselors, and the most patient of teachers."<br /> - Charles William Eliot</p>
                <button onClick={moveList} className="blue-button">See Records</button>
            </div>
        </>
    );
}

export default Home;
