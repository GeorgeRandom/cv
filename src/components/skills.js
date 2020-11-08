import React from 'react';
import { Container, Button, Row, Col,Form } from "react-bootstrap";

const Skills= (props)=>{
    let skillsArray = props.skills
    return <div className = {props.isEditing ? 'editing skills sheet' : 'skills sheet'}>
        <Container>
            <h2>extra skills</h2>
            {skillsArray.map((item) =>{
                let use = item.useful ? "V" : "X";
                return (
                <Row >
                    <Col>{item.name}</Col>
                    <Col>
                    Useful? {use}
                    </Col>
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
                {props.isEditing ? 'SAVE' : 'EDIT'}
            </Button>
            </Col>
        </Row>
        </Container>
    </div>
}

export default Skills;