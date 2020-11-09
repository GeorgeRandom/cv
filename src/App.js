import { render } from '@testing-library/react';
import React, { useState } from 'react';
import './App.css';
import GeneralInfo from './components/general.js'
import Education from './components/education.js'
import Experience from './components/experience.js'
import defaultCv from './components/defaultcv.js'
import Skills from './components/skills.js'
import { Container, Button, Row, Col } from "react-bootstrap"
import StandardSheet from './components/standardsheet.js';


//textes
const educationBottomText = "TRALALALALA tu es en train d'éditer ton EDUCATION, petit sacripant"
const experienceBottomText = "Houlalalalalala tu es vraiment en train d'éditer ton expérience professionnelle, dis donc, ca alors"

class App extends React.Component {
  constructor(props){
    super(props);
    const initialCv = JSON.parse(JSON.stringify(defaultCv))
    this.state = {
      cv : initialCv,
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
  


  
  saveEducation = (e) =>{
    console.log(e);
    const newCv = this.state.cv;
    newCv.education = e;
    this.setState({
      cv : newCv
    })
     this.setState({
      isEditingEducation : false
    })
  }

  saveExperience = (e)=>{
    const newCv = this.state.cv;
    newCv.experience = e;
    this.setState({
      cv : newCv
    })
     this.setState({
      isEditingExperience : false
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
        <StandardSheet
        title = "Education"
        data = {this.state.cv.education}
        clickEdit = {this.editEducation}
        saveData = {this.saveEducation}
        isEditing = {this.state.isEditingEducation}
        bottomText = {educationBottomText}
        />
        <StandardSheet
        title = 'EXPERIENCE'
        data = {this.state.cv.experience}
        clickEdit = {this.editExperience}
        saveData = {this.saveExperience}
        isEditing = {this.state.isEditingExperience}
        bottomText = {experienceBottomText}
        
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
