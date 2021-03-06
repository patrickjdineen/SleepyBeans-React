import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Container,Row,Col, Button, Form} from 'react-bootstrap';
import '../styles.css';
import { useHistory } from 'react-router-dom';


const CreateAccount = () =>{

    const {register, handleSubmit}= useForm();
    const history = useHistory()

    const createAccount = {
        create: async (data={}) =>{
            const response = await fetch(`/signup`,{
                method:'POST',
                headers:{
                    'Content-type':'application/json',
                },
                body: JSON.stringify(data)
            });
            if (!response.ok){
                throw new Error ('We could not create your new hero')
            } 
            return await response.json()
        },
    };

    function useCreateAccountData(){
        const [data, setData] = useState([]);
    
        async function handleFetchData (){
            const result = await createAccount.get();
            setData(result)
        }
    
        useEffect(()=> {
            handleFetchData();
        }, [])
        return {data, getData:handleFetchData}
    };

    const onSubmit = (data) =>{
        console.log(data)
        createAccount.create(data)
        history.push('/loginb')
    }
    
    
    return(
        <Container>
            <Row>
                
                <Col>
                <h1>Create Your Account</h1>
                
                <form className="container wasValidated" onSubmit = {handleSubmit(onSubmit)}>

                <div className="form-group">
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" name="first_name" id="first_name" placeholder="What is your first name?" className="form-control" ref={ register }/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" name="last_name" id="last_name" placeholder="What is your last name" className="form-control" ref={ register }/>
                </div>

                <div className="form-group">
                    <label htmlFor="email_address">Email Address</label>
                    <input type="text" name="email_address" id="email_address" placeholder="email_address"  className="form-control"ref={ register }/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" placeholder="password" className="form-control" ref={ register }/>
                </div>

                    <Button variant="secondary" type="submit">Sign Up</Button>
                
                </form>
                    
                </Col>
                <Col>
                </Col>
            </Row>
    </Container>
    )
}
export default CreateAccount