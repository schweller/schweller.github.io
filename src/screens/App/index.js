import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring'
import Particles from './components/Background'
import PastExperience from './components/PastExperience'
import Skillset from './components/Skillset'
import GetInTouch from './components/Get-in-touch'
import './App.css';

function Loading() {
  const { dash } = useSpring({
    from: { dash: 102 },
    to: { dash: 0 }
  })
 
  return (
    <animated.svg opacity=".5" height="60" width="60" strokeDasharray={100} strokeDashoffset={dash}>
      <circle cx="30" cy="30" r="20" pathLength="100" stroke-width="5" stroke="red"/>
    </animated.svg>
  )
}

function App () {
  const [loading, setLoading] = useState(true)
  
  const { opacity } = useSpring({
    opacity: loading ? 0 : 1
  })

  useEffect(() => {
    let timer = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  return loading ?
      <div className="loader"><Loading/></div> :
      <animated.div className="App" style={{opacity: opacity.interpolate(o => 0 + o) }}>
        <Particles />
        <div className="Hero">
          <div className="Row">
            <div className="Hero-intro Column">
              <div className="roboto-mono light align-left">
                <p>Hello! I'm Inacio. I work and freelance as software engineer</p>
                <p>I've proudly collaborated with awesome companies</p>
                <p>4th on Alakajam, a game jam, with <a 
                    className="underline-wave" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    href="https://thesunda.itch.io/cast-die-repeat">
                    Cast Die Repeat
                  </a>
                </p>
              </div>       
            </div>
            <div className="Hero-contact Column">
              <GetInTouch />
            </div>
          </div>
        </div>
        <div className="Scroll">
          <Skillset />
          <PastExperience/>
          <div className="Footer">
            <p className="roboto-mono light">Made with React, ThreeJS and React-Spring by yours truly. © 2019</p>
          </div>
        </div>
      </animated.div>
}

export default App;
