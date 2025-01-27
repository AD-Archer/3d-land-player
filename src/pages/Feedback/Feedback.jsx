import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Navbar, Nav, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Feedback.module.css';

const themes = [
    "default",
    "dark",
    "light",
    "mint-green",
    "icy",
    "fire",
    "halloween",
    "purple",
    "pink",
    "propeller-orange",
    "gray",
    "bee",
    "sunset",
];

const Feedback = () => {
    const [feedbackList, setFeedbackList] = React.useState([]); // Manage feedback list
    const [successMessage, setSuccessMessage] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            feedbackMessage: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            feedbackMessage: Yup.string().required('Feedback message cannot be empty'),
        }),
        onSubmit: (values, { resetForm }) => {
            const feedbackEntry = `${values.username}: ${values.feedbackMessage}`;
            setFeedbackList((prevList) => [...prevList, feedbackEntry]); // Update feedback list
            setSuccessMessage(`Thank you, ${values.username}, for your feedback!`);
            resetForm();
        },
    });

    return (
        <div className={styles.container}>
            <Navbar bg="dark" variant="dark" expand="lg" className={styles.navbar}>
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

            {/* Separator Line */}
            <hr className={styles.separator} />

            <Container fluid className={styles.main}>
                <Row>
                    <Col lg={12}>
                        <h1 className={styles.title}>Feedback</h1>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col lg={8}>
                        <div className={styles.feedbackCard}>
                            <h2 className={styles.sectionTitle}>Leave Your Feedback</h2>
                            <Form onSubmit={formik.handleSubmit} className={styles.profileForm}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Username:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="username"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.username}
                                        isInvalid={formik.touched.username && !!formik.errors.username}
                                        placeholder="Enter your username"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.username}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        isInvalid={formik.touched.email && !!formik.errors.email}
                                        placeholder="Enter your email"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Feedback:</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="feedbackMessage"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.feedbackMessage}
                                        isInvalid={formik.touched.feedbackMessage && !!formik.errors.feedbackMessage}
                                        placeholder="Enter your feedback"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.feedbackMessage}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Button type="submit" className={styles.updateButton}>
                                    Submit Feedback
                                </Button>
                            </Form>

                            {errorMessage && <Alert variant="danger" className="mt-3">{errorMessage}</Alert>}
                            {successMessage && <Alert variant="success" className="mt-3">{successMessage}</Alert>}
                        </div>

                        <div className={styles.feedbackList}>
                            <h3>Feedback List</h3>
                            <ul>
                                {feedbackList.map((feedback, index) => (
                                    <li key={index}>{feedback}</li>
                                ))}
                            </ul>
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
};

export default Feedback;
