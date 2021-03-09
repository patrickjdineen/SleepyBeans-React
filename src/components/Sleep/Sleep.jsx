import React from 'react';
import {useGetDataSleep} from '../../CustomHooks';
import {useForm} from 'react-hook-form';
import {useLocation} from 'react-router-dom';
import {babyServerCalls, sleepServerCalls} from '../../api';
import {Container,Card,CardGroup, Button} from 'react-bootstrap';

//Page for updating heros.
//gathers location from the previous clickthrough using history to bind the update of a hero to the ID selected from the herospage.
//uses reactform to handle date to fill

export const Sleep = () =>{
    const location= useLocation();
    const {register, handleSubmit}= useForm();

    let {sleepData, getData} = useGetDataSleep(location.state.id);
    console.log(sleepData)
    
    const onSubmit = (data) =>{
    sleepServerCalls.create(location.state.id, data)
    }
    
    const endSleep = (id) => {
        sleepServerCalls.update(location.state.id,id);
        getData()
    }

    return(
        <Container>
            <h1 className="page-title">Start a new Sleep Session</h1>
            <form onSubmit = {handleSubmit(onSubmit)}>
            <input type="text" name="sleep_type" id="sleep_type" placeholder="What kind of sleep?" ref={ register }/>
            <Button variant="secondary" type="submit">Start Sleep</Button>
            </form>
            {sleepData.map( (item) =>(
                <div key="item.id">
                    <CardGroup>
                    <Card style={{width: '20rem'}}>
                        <Card.Body>
                            <Card.Title className="page-title">
                                {item.sleep_type}
                            </Card.Title>
                            <Card.Text>
                                <p>Start Time</p>
                                {item.start_time}
                            </Card.Text>
                            <Card.Text>
                                <p>End Time </p>
                                {item.end_time}
                            </Card.Text>
                            <Button variant="danger" onClick = {()=> endSleep(item.id)}> Stop Sleep</Button>
                        </Card.Body>
                    </Card>
                    </CardGroup>
                </div>))}
        </Container>
    )
}