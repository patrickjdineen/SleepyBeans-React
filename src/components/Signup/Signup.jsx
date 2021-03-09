import React,{useState}from 'react';
import {Container, Form, Row, Col, Button} from 'react-bootstrap';

export const Signup = () =>{

    const {first_name, setFirstName} = useState("");
    const {last_name, setLastName} = useState("");
    const {email_address, setEmail} = useState("");
    const {password, setPassword} = useState("");


    return(
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="formBasicFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="firstName" value={first_name} placeholder="First Name" onChange={e => setFirstName(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="lastName" value={last_name} placeholder="Last Name" onChange={e => setLastName(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value= {email_address} placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        </Form.Group>

                        <Button variant="primary" type="" 
                            onClick={async () => {
                                const newUser = {email_address, password, first_name, last_name};
                                const response = await fetch ('http://localhost:5000/signup', {
                                    method:'POST',
                                    headers:{
                                        'Content-Type':'application/json'
                                    },
                                    body: JSON.stringify(newUser)
                                });
                                console.log(newUser)
                                if (!response.ok) {
                                    throw new Error ("Connection failed")
                                }
                            }}
                            >
                            Sign Up
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}