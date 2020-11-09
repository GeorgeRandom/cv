import React, { useState } from 'react';
import { Container, Button, Row, Col,Form } from "react-bootstrap";
import TextareaAutosize from 'react-textarea-autosize'

class CustomForm extends React.Component{
    constructor(props){
        super(props);
        
    }
    handleInputChange = (e) =>{
        // this.setState({
        //    text : e.currentTarget.value,
        // })
        this.props.handleInputChange({
            text : e.currentTarget.value, 
            id : this.props.id,
            category :this.props.category
            })
    }
    

    
    render(){
        
    
        
    if (!this.props.isEditing) return (
    <Form.Control 
        as ='input'
        value={this.props.text.replace(/(?:\r\n|\r|\n)/g, ' ')}
        readOnly 
        plaintext
        />
        )
        else{   
            if (this.props.type == 'textarea'){
                return (
            <TextareaAutosize
            name={this.props.name}
            value={this.props.text}
            onChange={this.handleInputChange}
            />

                )
            } 
            return (
        <Form.Control
        as={this.props.type}
        name={this.props.name}
        value={this.props.text}
        onChange={this.handleInputChange}
        className = {this.props.class}


        
        />
    )}

    }
    
}


class Education extends React.Component{
    constructor(props){
        super(props);
        const initialeduc = JSON.parse(JSON.stringify(this.props.education));
        this.state = {
            education : initialeduc
        }
    }
    reset = () => {
        const initialeduc = JSON.parse(JSON.stringify(this.props.education))
        this.setState({
            education : initialeduc
            })
        this.props.clickEdit()
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
    saveEducation = ()=>{

        this.props.saveEducation(this.state.education)
    }
    deleteEducation = (e) =>{
         let newEduc = this.state.education.filter((obj)=>{
            return obj.id != e.target.id
        })
        this.setState({
            education : newEduc
        })
    }
    addEducation = () =>{
        let newId = this.state.education.reduce((p, v)=>{
            return ( p > v ? p : v )
            }).id + 1
        const blankEducation = {
            where : '',
            what :'',
            when: '',
            id : newId
            }
        let newState = this.state.education
        newState.push(blankEducation)
        this.setState({
            education: newState
            })
        console.log(newId)

    }
        
      

        
        
        
    
    render(){

    let isEditing = this.props.isEditing
    let button;
    let addButton;
    let resetButton

    
    return <div className = {this.props.isEditing ? 'editing education sheet' : 'education sheet'}>
        <Container>
            <h2>Education</h2>
                <Row className='wherewhat'>
                    <Col>Where?</Col>
                    <Col xs={6}>What?</Col>
                    <Col>When?</Col>
                    <Col xs={1}>
                    </Col>
                </Row>
            {this.state.education.map((item) =>{
                if (isEditing){
                    button=    
                        <Button
                            size="sm"
                            variant="outline-danger"
                            className = "deleteButton"
                            id = {item.id}
                            onClick = {this.deleteEducation}
                            >
                            X
                        </Button>
                    addButton = 
                        <Button
                        variant = 'outline-primary'
                        size = 'sm'
                        onClick = {this.addEducation}
                        >
                        +
                        </Button>
                    
                    resetButton =
                    <Button 
                        variant="outline-primary" 
                        size="sm"
                        onClick={this.reset}
                    >
                    &lt;-
                    </Button>
                }
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
                        type = 'input'
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
                        type = 'textarea'
                        class = 'textarea-autosize.form-control-sm'
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
                        type = 'input'
                        />
                    </Col>

                    
                    <Col xs={1}>
                        {button}
                        
                    </Col>
               </Form.Row>
                )}
            )}
            <Row>
                <Col></Col>
                <Col className='rightAlign'>
                    {addButton}
                    {resetButton}

                <Button 
                    variant="outline-primary" 
                    size="sm"
                    
                    onClick={!isEditing ? this.props.clickEdit : this.saveEducation}
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