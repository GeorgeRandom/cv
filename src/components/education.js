import React, { useState } from 'react';
import { Container, Button, Row, Col,Form } from "react-bootstrap";

class CustomForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : props.text
        }
    }
    handleInputChange = (e) =>{
        this.setState({
           text : e.currentTarget.value,
        })
        this.props.handleInputChange({
            text : e.currentTarget.value, 
            id : this.props.id,
            category :this.props.category
            })
    }
    

    
    render(){
        
    if (!this.props.isEditing) return (
    <Form.Control 
        type='input'
        value={this.props.text}
        readOnly 
        plaintext
        />
        )
    return (
        <Form.Control
        type='input'
        name={this.props.name}
        value={this.state.text}
        onChange={this.handleInputChange}


        
        />
    )
    }
    
}


class Education extends React.Component{
    constructor(props){
        super(props);
        const initialeduc = props.education;
        this.state = {
            education : initialeduc
        }
    }
    reset = ()=>{
        this.setState({
            education : this.props.education
        })
        console.log("reset")

    }
    clear = () =>{
        this.setState({
            education : []
        })
    }
    handleInputChange = (obj) =>{
        const index = obj.id
        const key = obj.category
        const text = obj.text
        // let arrayIndex = this.props.education.findIndex((item)=>{
        //     return item.id == index
        //     })
        
        const newstate = this.state.education.map((object)=>{
                if (object.id ==index){
                    let newobj = object;
                    newobj[key] = text
                    return newobj
                }
                return object
            })
         this.setState({
            education : newstate
        })
        
        
     
    }

        
        
        
    
    render(){

    let isEditing = this.props.isEditing
    return <div className = {this.props.isEditing ? 'editing education sheet' : 'education sheet'}>
        <Container>
            <h2>Education</h2>
                <Row className='wherewhat'>
                    <Col>Where?</Col>
                    <Col xs={6}>What?</Col>
                    <Col>When?</Col>
                </Row>
            {this.props.education.map((item) =>{
                return (
                <Form.Row 
                    key={item.id}>
                    <Col>
                    <CustomForm
                        isEditing={isEditing}
                        text={item.where}
                        key = {'where' + item.id}
                        handleInputChange = {this.handleInputChange}
                        id = {item.id}
                        category = 'where'
                        />
                    </Col>
                    <Col xs={6}>
                    <CustomForm
                        isEditing={isEditing}
                        text={item.what}
                        key = {'what' + item.id}
                        handleInputChange = {this.handleInputChange}
                        category = 'what'
                        id = {item.id}
                        />
                    </Col>
                    <Col>
                    <CustomForm
                        isEditing={isEditing}
                        text={item.when}
                        key = {'when' + item.id}
                        handleInputChange = {this.handleInputChange}
                        category = 'when'
                        id = {item.id}
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
                    onClick={this.clear}
                >CLEAR</Button>

                <Button 
                    variant="outline-primary" 
                    size="sm"
                    onClick={this.reset}
                >RESET</Button>

                <Button 
                    variant="outline-primary" 
                    size="sm"
                    
                    onClick={!isEditing ? this.props.clickEdit : this.props.clickSave}
                    >
                    {this.props.isEditing ? 'SAVE' : 'EDIT'}
                </Button>

                </Col>
            </Row>
            
            
        </Container>
    </div>
 }
}

    

export default Education;