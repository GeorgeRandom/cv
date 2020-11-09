import React, { useState } from 'react';
import { Container, Button, Row, Col,Form } from "react-bootstrap";
import TextareaAutosize from 'react-textarea-autosize'

class CustomForm extends React.Component{
    constructor(props){
        super(props);
        
    }
    handleInputChange = (e) =>{

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
        className = {this.props.className}
        />
        )
        else{   
            if (this.props.type == 'textarea'){
                return (
            <TextareaAutosize
            name={this.props.name}
            value={this.props.text}
            onChange={this.handleInputChange}
            className = {this.props.className}
            />

                )
            } 
            return (
        <Form.Control
        as={this.props.type}
        name={this.props.name}
        value={this.props.text}
        onChange={this.handleInputChange}
        className = {this.props.className}


        
        />
    )}

    }
    
}


class StandardSheet extends React.Component{
    constructor(props){
        super(props);
        const initialData = JSON.parse(JSON.stringify(this.props.data));
        this.state = {
            data: initialData
        }
    }
    reset = () => {
        const initialData = JSON.parse(JSON.stringify(this.props.data))
        this.setState({
            data : initialData
            })
        this.props.clickEdit()
        console.log("reset")
        

    }
    clear = () =>{
        this.setState({
            data : []
        })
    }
    handleInputChange = (obj) =>{
        const index = obj.id
        const key = obj.category
        const text = obj.text
        // let arrayIndex = this.props.education.findIndex((item)=>{
        //     return item.id == index
        //     })
        
        const newstate = this.state.data.map((object)=>{
                if (object.id ==index){
                    let newobj = object;
                    newobj[key] = text
                    return newobj
                }
                return object
            })
         this.setState({
            data : newstate
        })
        
        
     
    }
    saveData = ()=>{

        this.props.saveData(this.state.data)
    }
    deleteLine = (e) =>{
         const newData = this.state.data.filter((obj)=>{
            return obj.id != e.target.id
            })
        this.setState({
            data: newData
        })
    }
    addLine = () =>{
        let newId = this.state.data.reduce((p, v)=>{
            return ( p > v ? p : v )
            }).id + 1
        const blankData = {
            where : '',
            what :'',
            when: '',
            id : newId
            }
        let newState = this.state.data
        newState.push(blankData)
        this.setState({
            data: newState
            })
        console.log(newId)

    }
        
      

        
        
        
    
    render(){

    let isEditing = this.props.isEditing
    let button;
    let addButton;
    let resetButton
    let bottomText
    if (this.props.isEditing){bottomText = this.props.bottomText}

    
    return <div className = {this.props.isEditing ? 'editing sheet' : 'sheet'}>
        <Container>
            <h2>{this.props.title}</h2>
                <Row className='wherewhat'>
                    <Col className = 'align-items-right'>Where?</Col>
                    <Col xs={6}>What?</Col>
                    <Col className = 'align-items-left'>When?</Col>
                    <Col xs={1}>
                    </Col>
                </Row>
            {this.state.data.map((item) =>{
                if (isEditing){
                    button=    
                        <Button
                            size="sm"
                            variant="outline-danger"
                            className = "deleteButton"
                            id = {item.id}
                            onClick = {this.deleteLine}
                            >
                            X
                        </Button>
                    addButton = 
                        <Button
                        variant = 'success'
                        size = 'lg'
                        onClick = {this.addLine}
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
                        className = 'align-items-right'
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
                        className = 'textarea-autosize.form-control-sm'
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
                        className = 'align-items-left'
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
                    
                    onClick={!isEditing ? this.props.clickEdit : this.saveData}
                    >
                    {this.props.isEditing ? 'SAVE' : 'EDIT'}
                </Button>

                </Col>
            </Row>
            
            <Row className= 'bottom-text'>{bottomText}</Row>
            
            
        </Container>
    </div>
 }
}

    

export default StandardSheet;