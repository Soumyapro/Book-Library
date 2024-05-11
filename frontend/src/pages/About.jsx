import React from "react";
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
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
                <h1 style={{ color: '#7BC9FF' }}>Welcome to Our Library</h1>
                <p style={{ color: '#8576FF' }}>Welcome to our literary sanctuary, a haven where pages come alive, stories dance off shelves, and imagination knows no bounds. Nestled within these walls is a treasure trove of knowledge, adventure, and inspiration, waiting to be discovered by curious minds like yours.</p>
                <div style={{ marginBottom: '40px' }}>
                    <h2 style={{ color: '#7BC9FF', marginBottom: '10px' }}>About Us</h2>
                    <p style={{ color: '#8576FF' }}>
                        Our library is not merely a collection of books but a gateway to worlds unknown. Established with a passion for spreading the love of reading, we have curated an eclectic assortment of literature spanning genres, cultures, and epochs. From timeless classics to contemporary bestsellers, our shelves brim with possibilities, inviting you to embark on a journey of exploration and discovery.
                    </p>
                </div>
                <div style={{ marginBottom: '40px' }}>
                    <h2 style={{ color: '#7BC9FF', marginBottom: '10px' }}>What We Offer</h2>
                    <p style={{ color: '#8576FF' }}>
                        Dive into the realms of fiction, where characters leap off the pages and tales transport you to distant lands. Immerse yourself in the depths of non-fiction, where wisdom and insight await in every chapter. Whether you seek escapism, education, or enlightenment, our library caters to all tastes and interests.
                    </p>
                </div>
                <div style={{ marginBottom: '40px' }}>
                    <h2 style={{ color: '#7BC9FF', marginBottom: '10px' }}>Events and Programs</h2>
                    <p style={{ color: '#8576FF' }}>
                        Beyond the confines of books, our library is a vibrant hub of activity. Join us for author readings, book clubs, literary discussions, and workshops that inspire creativity and foster a sense of community among book lovers. Our events are designed to ignite passions, spark conversations, and deepen your appreciation for the written word.
                    </p>
                </div>
                <div style={{ marginBottom: '40px' }}>
                    <h2 style={{ color: '#7BC9FF', marginBottom: '10px' }}>Our Mission</h2>
                    <p style={{ color: '#8576FF' }}>
                        At the heart of our library lies a commitment to promoting literacy, nurturing intellectual curiosity, and fostering a lifelong love of reading. We believe that access to literature is essential for personal growth, social cohesion, and cultural enrichment. Through our services and initiatives, we strive to empower individuals to become critical thinkers, empathetic citizens, and avid readers.
                    </p>
                </div>
                <div style={{ marginBottom: '40px' }}>
                    <h2 style={{ color: '#7BC9FF', marginBottom: '10px' }}>Get Involved</h2>
                    <p style={{ color: '#8576FF' }}>
                        Whether you're a seasoned bibliophile or a curious novice, there's a place for you in our literary haven. Become a member, volunteer your time, or simply drop by to explore our collection. Your presence enriches our community and strengthens our mission to celebrate the power of words.
                    </p>
                </div>
                <div style={{ marginBottom: '40px' }}>
                    <h2 style={{ color: '#7BC9FF', marginBottom: '10px' }}>Join Us</h2>
                    <p style={{ color: '#8576FF' }}>
                        Step through our doors and embark on a literary odyssey like no other. Discover, learn, and connect with fellow book enthusiasts who share your passion for the written word. Together, let's write the next chapter in the story of our library—a story fueled by imagination, curiosity, and the timeless magic of books. Welcome to our literary family; welcome to our book library.
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;
