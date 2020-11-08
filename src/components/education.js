import React from 'react';
import { Container, Button, Row, Col,Form } from "react-bootstrap";

const Education = (props)=>{

    let educArray = props.education
    return <div className = {props.isEditing ? 'editing education sheet' : 'education sheet'}>
        <Container>
            <h2>Education</h2>
                <Row className='wherewhat'>
                    <Col>Where?</Col>
                    <Col>What?</Col>
                    <Col>When?</Col>
                </Row>
            {educArray.map((item) =>{
                return (
                <Row >
                    <Col>{item.where}</Col>
                    <Col>{item.what}</Col>
                    <Col>{item.when}</Col>
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

    

export default Education;