import { useState } from 'react'
import './App.scss'

const soundArray = 

function App() {

  return (
    <div className="App">
      <container id="drum-machine">
        <container id="display">
          Some text to be displayed here
        </container>

          <button  className="drum-pad" id="Heater 1">

            <audio className="clip" id="W" src=""></audio> 
            
            W
            
            </button>
          <button className="drum-pad" id="Heater 2">

            <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio> 
            
            Q
            
            </button>
          <button className="drum-pad" id="Heater 3">

            <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio> 
            
            E
            
            </button>
          <button className="drum-pad" id="Heater 4">

            <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio> 
            
            A
            
            </button>
          <button className="drum-pad" id="Clap">

            <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio> 
            
            S
            
            </button>
          <button className="drum-pad" id="Open-HH">

            <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio> 
            
            D
            
            </button>
          <button className="drum-pad" id="Kick-n'-Hat
          ">
            <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio> 
            
            Z
            
            </button>
          <button className="drum-pad" id="Kick">

            <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio> 
            
            X
            
            </button>
          <button className="drum-pad" id="Closed-HH">

            <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio> 
            
            C
            
            </button>
      
      </container>    
    </div>
  )
}

export default App
