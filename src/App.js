import React, { useEffect, useState } from 'react';
import Vis from './Background'
import './App.css';

function App () {
  const [loading, setLoading] = useState(true)
  
  //TODO show a loader
  useEffect(() => {
    setTimeout(setLoading(false), 1000)
  }, [])

  return loading ?
      <div className="loader">Loading</div> :
      <div className="App">
        <Vis/>
        <div className="App-hero">
          <div className="cutive-mono align-left">
            <p>Hi, I'm Inacio!</p>
            <p>I work and freelance as software engineer and game developer.</p>
            <p>Recently I placed 4th on Alakajam, a game jam, with "Cast Die Repeat".</p>
          </div>       
        </div>
        <div className="App-hero">
          <div className="cutive-mono align-left">
            <p>Hi, I'm Inacio!</p>
            <p>I work and freelance as software engineer and game developer.</p>
            <p>Recently I placed 4th on Alakajam, a game jam, with "Cast Die Repeat".</p>
          </div>       
        </div>
      </div>
     
}

export default App;
