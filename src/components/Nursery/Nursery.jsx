import React, {useState} from 'react';
import {babyServerCalls} from '../../api'
import { useAuth } from '../../contexts/AuthContext';
import {Button,Card, Container, CardGroup, Row, Col} from 'react-bootstrap';
import {useGetData} from '../../CustomHooks';
import {useHistory} from 'react-router-dom';

export const Nursery = () => {
    const [error, setError]= useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory();

    const routeChange = (id,path) =>{
        history.push({
            pathname:path,
            state:{id:id}
        })
    }
    const deleteBaby = (id) =>{
        babyServerCalls.delete(id);
        getData()
    }

    let {babyData, getData} = useGetData();
    
    async function handleLogout(){
        setError("")
        try{
            await logout()
            history.push('/login')
        }catch{
            setError('failed to logout')
        }
    }
    

    
    return(
        <Container>
            <h2>Welcome {currentUser.email}</h2>
            <h4>If you have a new baby, click the button below to add them</h4>
            
            <Button variant="link" onClick={handleLogout}>Log Out</Button>

            <Button variant="secondary" onClick = { () => routeChange("",'createbaby')}>Add a new Baby</Button>
            <Row>
                <Col>
                {/*TODO - Add condition to only map if array length > 0 here and on sleep sessions*/}
                {babyData.map( (item) =>(
                    <div key="item.id">
                        <CardGroup>
                        <Card style={{width: '20rem'}}>
                            <Card.Body>
                                <Card.Title className="page-title">
                                    {item.name}
                                </Card.Title>
                                <Card.Text>
                                    Birthday - {item.birth_date}
                                </Card.Text>
                                <Button variant="primary" onClick = { () => routeChange(item.id,'sleep')}>Sleep</Button>
                                <Button variant="secondary" onClick = { () => routeChange(item.id,'update')}>Update</Button>
                                <Button variant="danger" onClick = {()=> deleteBaby(item.id)}>Remove </Button>
                            </Card.Body>
                        </Card>
                        </CardGroup>
                    </div>
                ))}
                </Col>
            </Row>
        </Container>
    )}
