import { render } from '@testing-library/react';
import React, { useState } from 'react';
import './App.css';
import GeneralInfo from './components/general.js'
import Education from './components/education.js'
import Experience from './components/experience.js'
import defaultCv from './components/defaultcv.js'
import Skills from './components/skills.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cv : defaultCv
    }

  }

  render() {
    return (
    <div className="App">
      <GeneralInfo
      general = {this.state.cv.general}
      />
      <Education
      education = {this.state.cv.education}
      />
      <Experience
      experience = {this.state.cv.experience}
      />
      <Skills
      skills = {this.state.cv.skills}
      />
    </div>
  )};
}



export default App;
