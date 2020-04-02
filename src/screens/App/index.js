import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring'
import Particles from './components/Background'
import GetInTouch from './components/Get-in-touch'
import './App.css';

const Link = ({href, children}) => {
  return (
    <>
      <a 
        href={href}
        target="_blank" 
        rel="noopener noreferrer"        
        >{children}
      </a>
    </>
  )
}

function App () {
  const [loading, setLoading] = useState(true)
  
  const { opacity } = useSpring({
    opacity: loading ? 0 : 1
  })

  useEffect(() => {
    let timer = setTimeout(() => setLoading(false), 50)
    return () => clearTimeout(timer)
  }, [])

  return (<animated.div className="App" style={{opacity: opacity.interpolate(o => 0 + o) }}>
        <Particles />
        <div className="Hero">
          <div className="Row">
            <div className="Hero-intro Column">
              <div className="roboto-mono light align-left">
                <p>Hello! I'm Inacio. I work and freelance as software engineer</p>
                <p>I've done some cool projects: <Link href="https://github.com/schweller/climma">Climma</Link>, <Link href="https://github.com/schweller/inacho">Inacho</Link> and <Link href="https://thesunda.itch.io/cast-die-repeat">Cast Die Repeat</Link>.</p>
              </div>
            </div>
            <div className="Hero-contact Column">
              <GetInTouch />
            </div>
          </div>
        </div>
        <div className="Scroll"></div>
      </animated.div>)
}

export default App;
