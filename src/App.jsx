import { useState } from 'react'
import './App.scss'

function App() {

  return (
    <div className="App">
      <container id="drum-machine">
        <container id="display">
          <div className="drum-pad" id="Heater 1">W</div>
          <div className="drum-pad" id="Heater 2">Q</div>
          <div className="drum-pad" id="Heater 3">E</div>
          <div className="drum-pad" id="Heater 4">A</div>
          <div className="drum-pad" id="Clap">S</div>
          <div className="drum-pad" id="Open-HH">D</div>
          <div className="drum-pad" id="Kick-n'-Hat">Z</div>
          <div className="drum-pad" id="Kick">X</div>
          <div className="drum-pad" id="Closed-HH">C</div>
        </container></container>    
    </div>
  )
}

export default App
