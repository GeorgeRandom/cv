import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import Header from './components/header.js'
import GeneralInfo from './components/general.js'
import Education from './components/education.js'
import Experience from './components/experience.js'

function App() {
  return (
    <div className="App">
      <Header
      firstName = "Jean"
      lastName = "Pouet"
      />
      <GeneralInfo/>
      <Education/>
      <Experience/>
    </div>
  );
}



export default App;
