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
    

    if (babyData.length === 0){
        return (
            <div>No Data</div>
        )
    }
    return(
        <Container>
            <div className="text-center">
            <h2 className="text-center">Welcome {currentUser.email}</h2> 
            <Button variant="danger"  onClick={handleLogout}>Log Out</Button>
            <h4>If you have a new baby, click the button below to add them</h4>
            
            <Button variant="secondary" onClick = { () => routeChange("",'createbaby')}>Add a new Baby</Button>
            </div>
            
            <Row>
                <Col>
                {/*TODO - Add condition to only map if array length > 0 here and on sleep sessions*/}
                {babyData.map( (item) =>(
                    <div key="item.id" className="mt-4">
                        <CardGroup>
                        <Card>
                            <Card.Body>
                                <Card.Title className="page-title text-center">
                                    <h1>{item.name}</h1>
                                </Card.Title>
                                <Card.Text className= "text-center">
                                    Birthday - {item.birth_date}
                                </Card.Text>
                                <div className="d-flex justify-content-center">
                                <Button className="mx-1 text-center" variant="primary" onClick = { () => routeChange(item.id,'sleep')}>Sleep</Button>
                                <Button className="mx-1 text-center" variant="secondary" onClick = { () => routeChange(item.id,'update')}>Update</Button>
                                <Button className="mx-1 text-center" variant="danger" onClick = {()=> deleteBaby(item.id)}>Remove </Button>
                                </div>
                            </Card.Body>
                        </Card>
                        </CardGroup>
                    </div>
                ))}
                </Col>
            </Row>
        </Container>
    )}
