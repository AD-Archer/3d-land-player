import { Form, Accordion, Button } from 'react-bootstrap';
import { useVideoPlayer } from '../../hooks/useVideoPlayer';
import { useTheme } from '../../contexts/ThemeContext';
import { videoData } from '../../data/playlists';
import styles from './Sidebar.module.css';

export function Sidebar() {
    const { currentVideoIndex, setVideoByIndex } = useVideoPlayer();
    const { currentTheme, setCurrentTheme } = useTheme();

    const themesList = [
        { name: 'Default', value: 'default' },
        { name: 'Dark', value: 'dark' },
        { name: 'Light', value: 'light' },
        { name: 'Mint Green', value: 'mint-green' },
        { name: 'Icy', value: 'icy' },
        { name: 'Fire', value: 'fire' },
        { name: 'Halloween', value: 'halloween' },
        { name: 'Purple', value: 'purple' },
        { name: 'Pink', value: 'pink' },
        { name: 'Gray', value: 'gray' },
        { name: 'Propeller Orange', value: 'propeller-orange' },
        { name: 'Bee', value: 'bee' },
        { name: 'Sunset', value: 'sunset' }
    ];

    return (
        <Accordion className={styles.sidebar} defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Playlist Selection</Accordion.Header>
                <Accordion.Body>
                    <Form.Group>
                        <Form.Label htmlFor="playlistSelector">Choose a Playlist:</Form.Label>
                        <Form.Select
                            id="playlistSelector"
                            value={currentVideoIndex}
                            onChange={(e) => setVideoByIndex(Number(e.target.value))}
                        >
                            {videoData.map((video, index) => (
                                <option key={index} value={index}>
                                    {video.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>Theme Selection</Accordion.Header>
                <Accordion.Body>
                    <div className={styles.themeGrid}>
                        {themesList.map((theme) => (
                            <Button
                                key={theme.value}
                                variant={currentTheme === theme.value ? "primary" : "outline-primary"}
                                size="sm"
                                className={styles.themeButton}
                                onClick={() => setCurrentTheme(theme.value)}
                            >
                                {theme.name}
                            </Button>
                        ))}
                    </div>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>Quick Links</Accordion.Header>
                <Accordion.Body>
                    <div className={styles.quickLinks}>
                        <Button variant="outline-primary" size="sm" href="/">
                            Home
                        </Button>
                        <Button variant="outline-primary" size="sm" href="/settings">
                            Settings
                        </Button>
                        <Button variant="outline-primary" size="sm" href="/feedback">
                            Feedback
                        </Button>
                    </div>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header>About</Accordion.Header>
                <Accordion.Body>
                    <p>Welcome to the 3D Land Music Player! Enjoy a curated collection of video game music playlists.</p>
                    <p>Use the theme selector to customize your viewing experience, and don't forget to check out all available playlists!</p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
} 