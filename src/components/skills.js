import React from 'react';
import { Container, Button, Row, Col,Form } from "react-bootstrap";

const Skills= (props)=>{
    let skillsArray = props.skills
    return <div className = "education sheet">
        <Container>
            <h1>skills</h1>
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
            
            
        </Container>
    </div>
}

export default Skills;