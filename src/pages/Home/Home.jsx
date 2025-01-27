import { Container, Row, Col } from 'react-bootstrap';
import styles from './Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <nav className="navbar navbar-dark bg-dark">
                <Container>
                    <span className="navbar-brand">3D Land Player</span>
                </Container>
            </nav>
            <Container className={styles.main}>
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <h1 className="text-center mb-4">The 3D Land Music Playlist Player</h1>
                        <div className="card">
                            <div className="card-body">
                                <p className="text-center">Welcome to the 3D Land Player!</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
} 