import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { VideoPlayer } from '../../components/VideoPlayer/VideoPlayer';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import styles from './Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Navbar bg="dark" variant="dark" expand="lg" style={{ borderBottom: '4px solid var(--border-bottom)' }}>
                <Container>
                    <Navbar.Brand as={Link} to="/" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '1rem' }}>
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

            <Container fluid className={styles.main}>
                <Row>
                    <Col lg={12}>
                        <h1 className={styles.title}>The 3D Land Music Playlist Player</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <div className={styles.videoSection}>
                            <VideoPlayer />
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-4">
                    <Col lg={10}>
                        <Sidebar />
                    </Col>
                </Row>
            </Container>

            <footer className={styles.footer}>
                <Container>
                    <Row>
                        <Col>
                            <p className="text-center">
                                ★ If you require any assistance, please contact me at{' '}
                                <a href="mailto:aarch0004@launchpadphilly.com">
                                    aarch0004@launchpadphilly.com
                                </a> ★
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
} 