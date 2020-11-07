import React from 'react';
import { Container, Button, Row, Col,Form } from "react-bootstrap";

const Experience = (props) => {

    let expArray = props.experience;

    return <div className = "experience sheet">
        <Container>
        <h1>Experience</h1>
        {expArray.map((item) =>{
            return (
            <Row >
                <Col>{item.company}</Col>
                <Col>{item.job}</Col>
                <Col>{item.startDate} - {item.endDate}</Col>
            
            </Row>
            )}
        )}
        </Container>
        </div>
        
}

export default Experience;



