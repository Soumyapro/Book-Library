import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar, Nav, NavDropdown, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';

function AddBooks() {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.book) {
            //console.log(location.state);
            console.log(location.state.book._id);
            setSelectedBook(location.state.book);
            const { book } = location.state;
            setTitle(book.title);
            setAuthor(book.author);
            setPublishYear(book.publishYear);
            setOpen(true);
        }
    }, [location.state]);

    const openForm = () => {
        setOpen(true);
        setSelectedBook(null);
    };
    const handleGoBack = () => {
        window.history.back();
    }
    const closeForm = () => {
        setOpen(false);
        setSelectedBook(null);
    };
    const handleBook = () => {
        const data = {
            title,
            author,
            publishYear
        }
        setLoading(true)
        if (selectedBook) {
            axios.put(`http://localhost:3000/books/${selectedBook._id}`, data)
                .then((res) => {
                    setLoading(false);
                    closeForm();
                })
                .catch((e) => {
                    console.log(e);
                    setLoading(false);
                });
        } else {
            axios.post("http://localhost:3000/books", data)
                .then((res) => {
                    setLoading(false);
                    closeForm();
                })
                .catch((e) => {
                    console.log(e);
                    setLoading(false);
                });
        }
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
                <Button variant="outline-light" className="ml-auto" style={{ marginRight: '25px' }} onClick={handleGoBack}>Go Back</Button>
            </Navbar>
            <div className="container d-flex flex-column align-items-center" style={{ marginTop: '140px' }}>
                <div style={{ marginBottom: '25px' }}>
                    <h1 style={{ color: '#7BC9FF', marginBottom: '15px' }}>Create A New Book Record</h1>
                    <Button onClick={openForm} style={{ marginTop: '25px', marginLeft: '0px' }}>Create</Button>
                </div>
                {open && (
                    <Form className="mt-3 mt-lg-0 ml-lg-3" style={{ marginTop: '50px' }}>
                        <Form.Group controlId="formTitle">
                            <Form.Label style={{ marginBottom: '15px', color: '#7BC9FF' }}>Title</Form.Label>
                            <Form.Control type="text" value={title} placeholder="Enter title" onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formAuthor">
                            <Form.Label style={{ marginTop: '15px', color: '#7BC9FF' }}>Author</Form.Label>
                            <Form.Control type="text" value={author} placeholder="Enter author" onChange={(e) => { setAuthor(e.target.value) }} />
                        </Form.Group>
                        <Form.Group controlId="formPublishYear">
                            <Form.Label style={{ marginTop: '15px', color: '#7BC9FF' }}>Publish Year</Form.Label>
                            <Form.Control type="number" value={publishYear} placeholder="Enter publish year" onChange={(e) => { setPublishYear(e.target.value) }} />
                        </Form.Group>
                        <div className="d-flex flex-column flex-lg-row">
                            <Button type="submit" style={{ marginTop: '15px', color: '#7BC9FF' }} onClick={handleBook}>Submit</Button>
                            <Button onClick={closeForm} variant="secondary" style={{ marginLeft: '15px', marginTop: '15px' }}>Close</Button>
                        </div>
                    </Form>
                )}
            </div>
        </>
    );
}

export default AddBooks;
