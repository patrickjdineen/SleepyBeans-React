import React from 'react';
import {useForm} from 'react-hook-form';
import {useLocation, useHistory} from 'react-router-dom';
import {babyServerCalls} from '../api';
import {Container, Button} from 'react-bootstrap';

//Page for updating heros.
//gathers location from the previous clickthrough using history to bind the update of a hero to the ID selected from the herospage.
//uses reactform to handle date to fill


const UpdateBaby = () =>{
    const history = useHistory();
    const location= useLocation();
    const {register, handleSubmit}= useForm();
    
    const onSubmit = (data) =>{

    babyServerCalls.update(location.state.id, data);

    history.push('/nursery');

    };
    //works for the redirect, but does it before API call finishes

    return(
        <Container>
        <h1 className="page-title">Update Your Baby</h1>
        <form onSubmit = {handleSubmit(onSubmit)}>
            <div className="form-group">
            <label htmlFor="name">Your Baby's Name</label>
            <input type="text" name="name" id="name" placeholder="What is your Baby's Name" className="form-control" ref={ register }/>
            </div>
            <div className="form-group">
            <label htmlFor="birth_date">Your Baby's Birthday </label>
            <input type="date" name="birth_date" id="birth_date" className="form-control" ref={ register }/>
            </div>
            <Button variant="secondary" type="submit" >Update Baby</Button>
            </form>
    </Container>
    )
}

export default UpdateBaby