import { Card } from 'react-bootstrap';
import { useVideoPlayer } from '../../hooks/useVideoPlayer';
import styles from './VideoPlayer.module.css';

export function VideoPlayer() {
    const { currentVideo, nextVideo, previousVideo } = useVideoPlayer();

    return (
        <Card className={styles.videoCard}>
            <div className={styles.videoWrapper}>
                <iframe
                    src={currentVideo.url}
                    title={currentVideo.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
            <Card.Body>
                <h2 className={styles.videoTitle}>{currentVideo.name}</h2>
                <p className={styles.description}>{currentVideo.description}</p>
                <div className={styles.controls}>
                    <button onClick={previousVideo} className="btn btn-primary">
                        Previous Video
                    </button>
                    <button onClick={nextVideo} className="btn btn-primary">
                        Next Video
                    </button>
                </div>
                <p className={styles.fact}>Fun Fact: {currentVideo.fact}</p>
            </Card.Body>
        </Card>
    );
} 