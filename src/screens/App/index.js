import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring'
import Particles from './components/Background'
import Entry from './components/Entry'
import './App.css';

const entries = [
  {
    position: "Senior Software Engineer",
    company: "Fanatics",
    from: "September 2017 - Current"
  },
  {
    position: "Software Engineer",
    company: "Avenue Code",
    from: "June 2015 - July 2017"
  },
  {
    position: "Frontend Developer",
    company: "PSafe Tecnologia",
    from: "September 2014 - June 2015"
  },
  {
    position: "Frontend Developer",
    company: "Infoglobo",
    from: "February 2011 - September 2014"
  }  
]

function App () {
  const [loading, setLoading] = useState(true)
  
  const { opacity } = useSpring({
    opacity: loading ? 0 : 1
  })

  //TODO show a loader
  useEffect(() => {
    let timer = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  return loading ?
      <div className="loader">Loading</div> :
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
              <p>Get in touch</p>
              <ul>
                <li>iscmendonca@gmail.com</li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="Scroll">
          <h3 className="roboto-mono light">work experience></h3>
          {entries.map((entry, key) => {
            return <Entry key={key} entry={entry}/>
          })}
          <div className="Footer">
            <p className="roboto-mono light">Made by yours truly. © 2019</p>
          </div>
        </div>
      </animated.div>
}

export default App;
