import React, {useState, useEffect } from 'react';
import {babyServerCalls} from '../../api'
import {Button,Card, Container, CardGroup} from 'react-bootstrap';
import {useGetData} from '../../CustomHooks';
import {useHistory} from 'react-router-dom';



export const Nursery = () => {
    
    const history = useHistory();

    const routeChange = (id,path) =>{
        history.push({
            pathname:path,
            state:{id:id}
        })
    }

    let {babyData, getData} = useGetData();
    console.log(babyData)

    const deleteBaby = (id) =>{
        babyServerCalls.delete(id);
        getData()
    }

    return(
        <Container>
            <h4>If you have a new baby, click the button below to add them</h4>
            <Button variant="secondary" onClick = { () => routeChange("",'createbaby')}>Add a new Baby</Button>
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
        </Container>
    )
}