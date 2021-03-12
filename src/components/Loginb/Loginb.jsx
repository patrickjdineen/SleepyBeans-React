import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Container,Row,Col, Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

export let tok = {}
console.log(tok)


export const Loginb = () =>{
    const {register, handleSubmit}= useForm();
    const history = useHistory()

    const [token, setToken] = useState()
    
    const loginAccount = {
        create: async (data={}) =>{
            const response = await fetch(`/login`,{
                method:'GET',
                headers:{
                    'Authorization': 'Basic '+btoa(`${data.email_address}:${data.password}`),
                },
            })
            .then(res => res.json())
            .then(data => tok = data)
            .then(() => console.log(tok))
        },
    };

    function seshToken(userToken){
        sessionStorage.setItem('token', JSON.stringify(tok));
    }

    const onSubmit = (data) =>{
        loginAccount.create(data)
        console.log("checkpoint onSubmit")
        console.log(data)
        console.log("check2")
        history.push('/nursery')
    }
    
    return(
        <Container>
            <Row>
                <Col>
                    <h1>Log In To Your Account via Flask</h1>
                    
                <form className="container wasValidated" onSubmit = {handleSubmit(onSubmit)}>
                    
                    <div className="form-group">
                        <label htmlFor="email_address">Email Address</label>
                        <input type="text" name="email_address" id="email_address" placeholder="email_address"  className="form-control"ref={ register }/>
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="password" className="form-control" ref={ register }/>
                    </div>
    
                        <Button variant="secondary" type="submit">Log In </Button>
                    
                    </form>
                </Col>
                
            </Row>
    </Container>
    )
}