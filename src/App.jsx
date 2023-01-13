import {useState, useEffect} from 'react'
import './App.scss'

const soundArray =[
  {
    keyCode: 81,
    key: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    key: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    key: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    key: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    key: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    key: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    key: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    key: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    key: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
]; 



function App() {
  const [currentKey, setCurrentKey] = useState(
    ''
    );
    const playSound = selector => {
      const audio = document.getElementById(selector);
      audio.play();
      let soundId = soundArray.filter(obj => {
        return obj.key === selector;
      })
      setCurrentKey(soundId[0].id);
    }
  
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      playSound(event.key.toUpperCase());
    })

  }, [])

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">
          {currentKey}
        </div>

        <div className="keyPad">
          
        {soundArray.map(sound => {
          return <button
          key={sound.src}  className='drum-pad' id={sound.id} onClick={() => { playSound(sound.key) }}>
            <audio className='clip' id={sound.key} src={sound.url} />
            {sound.key}
          </button>
        })}
        </div>
          
      </div>    
    </div>
  )
}

export default App
