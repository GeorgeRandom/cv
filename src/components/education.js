import React from 'react';
import { Container, Button, Row, Col,Form } from "react-bootstrap";

const CustomForm= (props)=>{
    if (!props.isEditing) return (
    <Form.Control 
        type='input'
        defaultValue={props.text}
        readOnly 
        plaintext
        />
        )
    return (
        <Form.Control
        type='input'
        placeholder={props.text}
        plaintext
        />
    )
    
}

const Education = (props)=>{

    let educArray = props.education
    let isEditing = props.isEditing
    return <div className = {props.isEditing ? 'editing education sheet' : 'education sheet'}>
        <Container>
            <h2>Education</h2>
                <Row className='wherewhat'>
                    <Col>Where?</Col>
                    <Col xs={6}>What?</Col>
                    <Col>When?</Col>
                </Row>
            {educArray.map((item) =>{
                return (
                <Form.Row >
                    <Col>
                    <CustomForm
                        isEditing={isEditing}
                        text={item.where}
                        />
                    </Col>
                    <Col xs={6}>{item.what}</Col>
                    <Col>
                    <CustomForm
                        isEditing={isEditing}
                        text={item.when}
                        />
                    </Col>
               </Form.Row>
                )}
            )}
            <Row>
                <Col></Col>
                <Col className='rightAlign'>
                <Button 
                    variant="outline-primary" 
                    size="sm"
                    
                    onClick={!isEditing ? props.clickEdit : props.clickSave}
                    >
                    {props.isEditing ? 'SAVE' : 'EDIT'}
                </Button>
                </Col>
            </Row>
            
            
        </Container>
    </div>
 }

    

export default Education;