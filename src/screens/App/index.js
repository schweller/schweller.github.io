import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring'
import Particles from './components/Background'
import './App.css';

function App () {
  const [loading, setLoading] = useState(true)
  
  const { opacity } = useSpring({
    opacity: loading ? 0 : 1
  })

  //TODO show a loader
  useEffect(() => {
    setTimeout(setLoading(false), 1000)
  }, [])

  return loading ?
      <div className="loader">Loading</div> :
      <animated.div className="App" style={{opacity: opacity.interpolate(o => 0 + o) }}>
        <Particles />
        <div className="App-hero">
          <div className="cutive-mono align-left">
            <p>Hi, I'm Inacio!</p>
            <p>I work and freelance as software engineer and game developer.</p>
            <p>Recently I placed 4th on Alakajam, a game jam, with "Cast Die Repeat".</p>
          </div>       
        </div>
        <div className="App-hero">      
        </div>
      </animated.div>
     
}

export default App;
