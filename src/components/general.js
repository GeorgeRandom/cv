import React from 'react';
import { Container, Button, Row, Col,Form } from "react-bootstrap";


const GeneralInfo= (props)=>{
    return <div 
                className = {props.isEditing ? 'editing general sheet' : 'general sheet'}
                >
        <Container >
            
            <h2> Basics </h2> 
            <Row xs={2} md={4} lg={12}>
                <Col>
                    {props.general.name}
                </Col>
                <Col>
                    {props.general.adress}
                </Col>
                <Col>
                    {props.general.phone}
                </Col>
                <Col>
                    {props.general.email}
                </Col>
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

export default GeneralInfo;