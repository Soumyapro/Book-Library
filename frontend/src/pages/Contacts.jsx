import React from "react";
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contacts() {
    const handleGoBack = () => {
        window.history.back();
    };

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
                <Button variant="outline-light" className="ml-auto" style={{ marginRight: '25px' }} onClick={handleGoBack}>Go Back</Button>
            </Navbar>
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
                <h1 style={{ color: '#7BC9FF' }}>Contact Us</h1>
                <p style={{ color: '#8576FF' }}>Feel free to reach out to us for any inquiries or assistance:</p>
                <ul>
                    <li style={{ color: '#8576FF' }}>Email: abc@gmail.com</li>
                    <li style={{ color: '#8576FF' }}>Phone: +1 123-456-7890</li>
                    <li style={{ color: '#8576FF' }}>Address: 123 Library Street, City, Country</li>
                </ul>
            </div>
        </>
    );
}

export default Contacts;
