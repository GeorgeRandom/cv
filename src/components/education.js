import React from 'react';
import { Container, Button, Row, Col,Form } from "react-bootstrap";

const Education = (props)=>{

    let educArray = props.education
    return <div className = "education sheet">
        <Container>
            <h1>Education</h1>
            {educArray.map((item) =>{
                return (
                <Row >
                    <Col>{item.where}</Col>
                    <Col>{item.what}</Col>
                    <Col>{item.when}</Col>
                
                </Row>
                )}
            )}
            
            
        </Container>
    </div>
 }

    

export default Education;