import React from 'react';
import {useGetDataSleep} from '../CustomHooks';
import {useForm} from 'react-hook-form';
import {useLocation} from 'react-router-dom';
import {sleepServerCalls} from '../api';
import {Container,Card,CardGroup, Button,Col, Row} from 'react-bootstrap';


const Sleep = () =>{
    const location= useLocation();
    const {register, handleSubmit}= useForm();

    let {sleepData, getData} = useGetDataSleep(location.state.id);

    const onSubmit = (data) =>{
    sleepServerCalls.create(location.state.id, data)
    }
    
    const endSleep = (id) => {
        sleepServerCalls.update(location.state.id,id);
        getData()
    }

    if (sleepData.length === 0){
        return (
            <Container>
                <Row>
                <h4>It looks like there are currently no babies sleeping, Please start a new session</h4>
            
                <form onSubmit = {handleSubmit(onSubmit)}>
            <input type="text" name="sleep_type" id="sleep_type" placeholder="What kind of sleep?" ref={ register }/>
            <Button variant="secondary" type="submit">Start Sleep</Button>
            </form>
                </Row>
            </Container>
        )
    }
    return(
        <Container>
            <div className="text-center">
            <h1 className="page-title">Start a new Sleep Session</h1>
            <form onSubmit = {handleSubmit(onSubmit)}>
            <input type="text" name="sleep_type" id="sleep_type" placeholder="What kind of sleep?" ref={ register }/>
            <Button variant="secondary" type="submit">Start Sleep</Button>
            </form>
            <h3>
                Here are the current sleep sessions for your baby:
            </h3>
            </div>

            <Row>
            <Col>
            {sleepData.map( (item) =>(
                <div key="item.id" className="mt-4">
                    <CardGroup>
                    <Card>
                        <Card.Body>
                            <Card.Title className="page-title text-center">
                                <h1>{item.sleep_type}</h1>
                            </Card.Title>
                            <Card.Text className="text-center">
                                <p><strong>Start Time</strong></p>
                                {item.start_time}
                            </Card.Text>
                            <Card.Text className="text-center">
                                <p><strong>End Time</strong> </p>
                                {item.end_time}
                            </Card.Text>
                            <Card.Text className="text-center">
                                <p><strong>Total Sleep Time</strong></p>
                                {item.sleep_duration}
                            </Card.Text>
                            <div className="d-flex justify-content-center">
                            <Button variant="danger" onClick = {()=> endSleep(item.id)}> Stop Sleep</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    </CardGroup>
                </div>))}
            </Col>
            </Row>
        </Container>
    )
    };

export default Sleep