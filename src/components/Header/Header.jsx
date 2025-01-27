import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" style={{ borderBottom: '4px solid var(--border-bottom)' }}>
            <Container>
                <Navbar.Brand 
                    as={Link} 
                    to="/" 
                    className={styles.brand}
                >
                    3D Land Player
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.7rem' }}>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/settings">Settings</Nav.Link>
                        <Nav.Link as={Link} to="/feedback">Feedback</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
} 