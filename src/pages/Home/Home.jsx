import { Container, Row, Col } from 'react-bootstrap';
import { VideoPlayer } from '../../components/VideoPlayer/VideoPlayer';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Header } from '../../components/Header/Header';
import { videoData } from '../../data/playlists';
import { useVideoPlayer } from '../../hooks/useVideoPlayer';
import styles from './Home.module.css';

export default function Home() {
    const { currentVideo, setCurrentVideo } = useVideoPlayer();

    // Get 3 random playlists for recommendations (excluding the current one)
    const getRandomPlaylists = () => {
        return [...videoData]
            .filter(video => video.url !== currentVideo.url) // Exclude current video
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
    };

    const handlePlaylistClick = (playlist) => {
        setCurrentVideo(playlist);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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

                {/* Recommended Playlists Section */}
                <Row className="justify-content-center mt-4">
                    <Col lg={10}>
                        <div className={styles.recommendedSection}>
                            <h2 className={styles.recommendedTitle}>Recommended Playlists</h2>
                            <div className={styles.recommendedGrid}>
                                {getRandomPlaylists().map((playlist, index) => (
                                    <div 
                                        key={index} 
                                        className={styles.videoCard}
                                        onClick={() => handlePlaylistClick(playlist)}
                                        role="button"
                                        tabIndex={0}
                                    >
                                        <div className={styles.thumbnailContainer}>
                                            <img 
                                                src={playlist.image} 
                                                alt={playlist.name}
                                                className={styles.thumbnail}
                                            />
                                            <div className={styles.playOverlay}>
                                                <span className={styles.playIcon}>▶</span>
                                            </div>
                                        </div>
                                        <div className={styles.videoInfo}>
                                            <h3 className={styles.videoTitle}>{playlist.name}</h3>
                                            <p className={styles.videoDescription}>
                                                {playlist.description}
                                            </p>
                                            <p className={styles.videoFact}>
                                                {playlist.fact}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
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