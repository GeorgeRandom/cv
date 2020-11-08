import { render } from '@testing-library/react';
import React, { useState } from 'react';
import './App.css';
import GeneralInfo from './components/general.js'
import Education from './components/education.js'
import Experience from './components/experience.js'
import defaultCv from './components/defaultcv.js'
import Skills from './components/skills.js'
import { Container, Button, Row, Col } from "react-bootstrap";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cv : defaultCv,
      isEditingBasic: false,
      isEditingEducation :false,
      isEditingExperience : false,
      isEditingSkills :false
      }
 
  }
 
    //click handlers
  
  editBasicInfo = () =>{
    console.log ('editing the basics');
    this.setState({
      isEditingBasic : !this.state.isEditingBasic,
    })
    }
  
  editEducation = () =>{
    console.log ('editing education');
    this.setState({
      isEditingEducation : !this.state.isEditingEducation
    })

    }
  editExperience = () =>{
    console.log ('editing Experience');
    this.setState({
      isEditingExperience: !this.state.isEditingExperience
    })
    }
  editSkills = () =>{
     console.log ('editing skills')
     this.setState({
      isEditingSkills: !this.state.isEditingSkills
    })
    }
        
    
  
    
  render() {
    return (
    <div className="App">
      <Container >
        
        <GeneralInfo
        general = {this.state.cv.general}
        clickEdit = {this.editBasicInfo}
        isEditing = {this.state.isEditingBasic}
        />
        <Education
        education = {this.state.cv.education}
        clickEdit = {this.editEducation}
        isEditing = {this.state.isEditingEducation}
        />
        <Experience
        experience = {this.state.cv.experience}
        clickEdit = {this.editExperience}
        isEditing = {this.state.isEditingExperience}
       />
        <Skills
        skills = {this.state.cv.skills}
        clickEdit = {this.editSkills}
        isEditing = {this.state.isEditingSkills}
        />
        
      </Container>
    </div>
  )};
}



export default App;
