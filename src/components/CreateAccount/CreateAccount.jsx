import react from 'react';
import {useForm} from 'react-hook-form';
import {createAccount} from '../../api';
import {Container,Row,Col, Button} from 'react-bootstrap';


export const CreateAccount = () =>{

    const {register, handleSubmit}= useForm();
    
    const onSubmit = (data) =>{
        console.log(data)
        createAccount.create(data)
    }
    
    return(
        <Container>
            <Row>
                <Col>
                    <h1>Create Your Account</h1>
                    <form onSubmit = {handleSubmit(onSubmit)}>
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" name="first_name" id="first_name" placeholder="What is your first name?" ref={ register }/>

                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" name="last_name" id="last_name" placeholder="What is your last name" ref={ register }/>

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