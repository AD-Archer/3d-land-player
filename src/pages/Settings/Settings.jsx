import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Header } from '../../components/Header/Header';
import { useTheme } from '../../contexts/ThemeContext';
import { useState, useEffect } from 'react';
import styles from './Settings.module.css';

export default function Settings() {
    const { currentTheme, setCurrentTheme, themes } = useTheme();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        // Load user data from localStorage on component mount
        const userData = JSON.parse(localStorage.getItem('userData') || '{}');
        setUsername(userData.username || '');
        setEmail(userData.email || '');
    }, []);

    const handleProfileSubmit = (e) => {
        e.preventDefault();
        try {
            const userData = { username, email, password };
            localStorage.setItem('userData', JSON.stringify(userData));
            setSuccessMessage('Profile updated successfully!');
            setErrorMessage('');
            setPassword(''); // Clear password after save
        } catch (error) {
            setErrorMessage('Failed to update profile. Please try again.');
            setSuccessMessage('');
        }
    };

    const handleThemeChange = (themeName) => {
        setCurrentTheme(themeName);
        setSuccessMessage(`Theme changed to ${themeName}!`);
    };

    return (
        <div className={styles.container}>
            <Header />
            
            <Container fluid className={styles.main}>
                <Row>
                    <Col lg={12}>
                        <h1 className={styles.title}>Settings</h1>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col lg={8}>
                        <div className={styles.settingsCard}>
                            <h2 className={styles.sectionTitle}>Theme Selection</h2>
                            <div className={styles.themeGrid}>
                                {Object.keys(themes).map((themeName) => (
                                    <Button
                                        key={themeName}
                                        onClick={() => handleThemeChange(themeName)}
                                        className={`${styles.themeButton} ${currentTheme === themeName ? styles.activeTheme : ''}`}
                                        style={{
                                            backgroundColor: themes[themeName].accentColor,
                                            color: themes[themeName].secondaryColor,
                                            borderColor: themes[themeName].borderBottom
                                        }}
                                    >
                                        {themeName}
                                    </Button>
                                ))}
                            </div>
                            
                            {errorMessage && <Alert variant="danger" className="mt-3">{errorMessage}</Alert>}
                            {successMessage && <Alert variant="success" className="mt-3">{successMessage}</Alert>}

                            <Form onSubmit={handleProfileSubmit} className={styles.profileForm}>
                                <h2 className={styles.sectionTitle}>User Profile</h2>
                                
                                <Form.Group className="mb-3">
                                    <Form.Label>Username:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="Enter your username"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                    />
                                </Form.Group>

                                <Button type="submit" className={styles.updateButton}>
                                    Update Profile
                                </Button>
                            </Form>
                        </div>
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