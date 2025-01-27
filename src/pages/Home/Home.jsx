import { Container, Row, Col } from 'react-bootstrap';
import { VideoPlayer } from '../../components/VideoPlayer/VideoPlayer';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Header } from '../../components/Header/Header';
import styles from './Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            
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