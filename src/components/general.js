import React from 'react';
import { Container, Button, Row, Col,Form } from "react-bootstrap";


const GeneralInfo= (props)=>{
    return <div className = "general sheet">
        <Container>
            <h1>Basic Info</h1>
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
            </Row>
        </Container>
        
        </div>
}

export default GeneralInfo;