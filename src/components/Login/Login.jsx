import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Container,Row,Col, Button} from 'react-bootstrap';


export const Login = () =>{
    const {register, handleSubmit}= useForm();
    const loginAccount = {
        create: async (data={}) =>{
            console.log("checkpoint login")
            console.log(data)
            console.log(data.email_address)
            const response = await fetch(`/login`,{
                method:'GET',
                headers:{
                    'Authorization': 'Basic '+btoa(`${data.email_address}:${data.password}`),
                },
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
            const result = await loginAccount.get();
            setData(result)
            console.log("checkpoint useCreate A")
        }
        useEffect(()=> {
            handleFetchData();
        }, [])
        console.log("useCreate B")
        return {data, getData:handleFetchData}
    };

    const onSubmit = (data) =>{
        console.log(data)
        loginAccount.create(data)
        console.log("checkpoint onSubmit")
    }
    
    return(
        <Container>
            <Row>
                <Col>
                </Col>
                <Col>
                    <h1>Log In To Your Account</h1>
                    
                <form className="container wasValidated" onSubmit = {handleSubmit(onSubmit)}>
                    
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
                
            </Row>
    </Container>
    )
}