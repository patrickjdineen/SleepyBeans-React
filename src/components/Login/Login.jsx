import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';

export const Login = (props) => {
    const [email_address, setEmail_address] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch(`/login`,{
            method:'GET',
            headers:{
                'Authorization': 'Basic '+btoa(`${email_address}:${password}`),
            },
            credentials:'include'
        })
        const content = await response.json();

        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to="/"/>;
    }

    return (
        <Container>
            <Row>
            <Col>
        <form onSubmit={submit}>
            <h1>Please sign in</h1>
            <div className="form-group">
                <input type="email" className="form-control" placeholder="Email address" required
                    onChange={e => setEmail_address(e.target.value)}/>
            </div>  

            <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" required
                    onChange={e => setPassword(e.target.value)}/>
            </div>

            <button variant="secondary" type="submit">Sign in</button>
        </form>
        </Col>
        </Row>
        </Container>
    );
};

export default Login;