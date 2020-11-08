import React from 'react';
import { Container, Button, Row, Col,Form } from "react-bootstrap";

const Experience = (props) => {

    let expArray = props.experience;

    return <div className = {props.isEditing ? 'editing experience sheet' : 'experience sheet'}>
        <Container>
        <h2>Experience </h2>
        <Row className='wherewhat'>
                    <Col>Where?</Col>
                    <Col>What?</Col>
                    <Col>When?</Col>
                </Row>
        {expArray.map((item) =>{
            return (
            <Row >
                <Col>{item.company}</Col>
                <Col>{item.job}</Col>
                <Col>{item.startDate} - {item.endDate}</Col>
            
            </Row>
            )}
        )}
        <Row>
                <Col></Col>
                <Col className='rightAlign'>
                <Button 
                    variant="outline-primary" 
                    size="sm"
                    
                    onClick={props.clickEdit}
                    
                    >
                    EDIT
                </Button>
                </Col>
            </Row>
        </Container>
        </div>
        
}

export default Experience;



