import React from 'react';
import {useForm} from 'react-hook-form';
import {login} from '../../api';
import {Container,Row,Col, Button} from 'react-bootstrap';


export const Login = () =>{

    const {register, handleSubmit}= useForm();
    
    const onSubmit = (data) =>{
        console.log(data)
        login.create(data)
    }
    
    return(
        <Container>
            <Row>
                <Col>
                    <h1>Login to Your Account</h1>
                    <form onSubmit = {handleSubmit(onSubmit)}>
                        <label htmlFor="email_address">Email Address</label>
                        <input type="text" name="email_address" id="email_address" placeholder="email_address" ref={ register }/>
                        
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" id="password" placeholder="password" ref={ register }/>

                        <Button variant="secondary" type="submit">Sign Up</Button>
                        
                        </form>
                </Col>
            </Row>
        </Container>
    )
}