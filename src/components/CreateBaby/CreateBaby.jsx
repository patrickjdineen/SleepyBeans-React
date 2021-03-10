import React from 'react';
import {useForm} from 'react-hook-form';
import {useLocation, useHistory, Redirect} from 'react-router-dom';
import {babyServerCalls} from '../../api';
import {Container, Button} from 'react-bootstrap';


export const CreateBaby = () =>{
    const history = useHistory();
    const {register, handleSubmit}= useForm();
    
    const onSubmit = (data) =>{
        console.log(data)
        babyServerCalls.create(data)
        history.push('/nursery');
    }
    
    return(
        <Container>
        <h1>Create Your New Baby</h1>
        <form onSubmit = {handleSubmit(onSubmit)}>
            <label htmlFor="name">Baby's Name</label>
            <input type="text" name="name" id="name" placeholder="What is your Baby's Name" ref={ register }/>

            <label htmlFor="birth_date">Your Baby's Birthday</label>
            <input type="date" name="birth_date" id="birth_date" placeholder="What is your Babys Birthday?" ref={ register }/>

            <Button variant="secondary" type="submit">Create Baby</Button>
            
            </form>
    </Container>
    )
}