import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Header } from '../../components/Header/Header';
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
    const [feedbackList, setFeedbackList] = React.useState([]);
    const [successMessage, setSuccessMessage] = React.useState('');

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
            const feedbackEntry = {
                username: values.username,
                message: values.feedbackMessage,
                date: new Date().toLocaleDateString()
            };
            setFeedbackList(prev => [feedbackEntry, ...prev]);
            setSuccessMessage(`Thank you, ${values.username}, for your feedback!`);
            resetForm();
            
            // Clear success message after 3 seconds
            setTimeout(() => setSuccessMessage(''), 3000);
        },
    });

    return (
        <div className={styles.container}>
            <Header />
            
            <Container fluid className={styles.main}>
                <Row>
                    <Col lg={12}>
                        <h1 className={styles.title}>Feedback</h1>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col lg={8}>
                        <div className={styles.feedbackCard}>
                            <h2 className={styles.sectionTitle}>Share Your Thoughts</h2>
                            <Form onSubmit={formik.handleSubmit}>
                                <Form.Group className="mb-4">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="username"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.username}
                                        isInvalid={formik.touched.username && !!formik.errors.username}
                                        className={styles.formControl}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.username}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        isInvalid={formik.touched.email && !!formik.errors.email}
                                        className={styles.formControl}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Your Feedback</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        name="feedbackMessage"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.feedbackMessage}
                                        isInvalid={formik.touched.feedbackMessage && !!formik.errors.feedbackMessage}
                                        className={styles.formControl}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.feedbackMessage}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <div className={styles.buttonContainer}>
                                    <Button type="submit" className={styles.submitButton}>
                                        Submit Feedback
                                    </Button>
                                </div>
                            </Form>

                            {successMessage && (
                                <Alert variant="success" className={`mt-4 ${styles.alert}`}>
                                    {successMessage}
                                </Alert>
                            )}
                        </div>

                        {feedbackList.length > 0 && (
                            <div className={styles.feedbackList}>
                                <h3 className={styles.listTitle}>Recent Feedback</h3>
                                {feedbackList.map((feedback, index) => (
                                    <div key={index} className={styles.feedbackItem}>
                                        <div className={styles.feedbackHeader}>
                                            <span className={styles.username}>{feedback.username}</span>
                                            <span className={styles.date}>{feedback.date}</span>
                                        </div>
                                        <p className={styles.message}>{feedback.message}</p>
                                    </div>
                                ))}
                            </div>
                        )}
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
