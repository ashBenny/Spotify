import React from 'react'
import Nav from './components/Nav'
import Main from './components/Main'

import { BrowserRouter } from 'react-router-dom';

import './App.css'

const App = () => {
  return (
    <BrowserRouter>

      <div className="outerWrap">
      <div className="App">
        <Nav />
        <Main />
      </div>
      <div className="musicControls">music controls</div>
    </div>
    
    </BrowserRouter>
    
  )
}

export default App