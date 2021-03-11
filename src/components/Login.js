import React, { useRef, useState} from 'react';
import {Container, Col, Row, Form, Button, Alert} from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom';
import { auth } from '../firebase';

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError]= useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value,passwordRef.current.value)
            history.push('/nursery')
        } catch{
            setError('failed to login')
        }
        setLoading(false)
    }

    return (
        <>
        <Container>
            <Row>
                <Col>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button disabled = {loading} className="w-100" type="submit">Log In</Button>
                    </Form>
                    <div className="text-center mt-2">
                        Need an account? <Link to='/signup'>Sign Up</Link>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}
