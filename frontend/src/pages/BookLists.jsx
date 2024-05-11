import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar, Nav, NavDropdown, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function BookLists() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBook, setSelectedBook] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:3000/books")
            .then((res) => {
                setBooks(res.data.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.response ? error.response.data.message : error.message);
                setLoading(false);
            });
    }, []);

    const handleDelete = (book_id) => {
        setLoading(true);
        axios.delete(`http://localhost:3000/books/${book_id}`)
            .then((res) => {
                alert("Do you want to delete it?");
                setBooks(books.filter(book => book.id !== book_id));
                window.location.reload();
                setLoading(false);
            })
            .catch((e) => {
                console.log("error: " + e);
                setLoading(false);
            });
    }

    const handleEdit = (book) => {
        navigate('/AddBooks', { state: { book } });
    }
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    }
    const handleGoBack = () => {
        window.history.back();
    }
    const filteredBooks = books.filter((book) => {
        return (
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.publishYear.toString().includes(searchQuery)
        );
    });

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
            <div className="container mt-5">
                <h1 className="text-center mb-4" style={{ color: '#7BC9FF' }}>Books Records</h1>
                <div className="mb-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Form.Group controlId="searchForm" style={{ width: '60%' }}>
                        <div className="input-group">
                            <Form.Control
                                type="text"
                                placeholder="Search by title, author, or publish year"
                                value={searchQuery}
                                onChange={handleSearch}
                                className="form-control"
                            />
                        </div>
                    </Form.Group>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Publish Year</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredBooks.map((book, index) => (
                                <tr key={book.id}>
                                    <td>{index + 1}</td>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.publishYear}</td>
                                    <td>
                                        <button className="btn btn-primary btn-sm mr-2" style={{ marginRight: '6px' }} onClick={() => handleEdit(book)}>Edit</button>
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(book._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default BookLists;
