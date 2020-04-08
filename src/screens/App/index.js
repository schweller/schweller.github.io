import React, { useEffect, useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { useSpring, animated } from 'react-spring';

import GetInTouch from './components/Get-in-touch'
import Link from './components/Link'
import Toggle from './components/Toggle'

import BaseStyles from '../../styles/BaseStyles'
import { theme, column } from '../../styles'
import './animations.css';

const Hero = styled.div`
  position: relative;
  margin-top: 3.33rem;
  @media (min-width: 980px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 100vh;
    margin-top: 0;
    padding-left: 5rem;
    padding-bottom: 5rem;
  }
`

const Row = styled.div`
display: flex;
height: 100vh;
flex-direction: column;
margin-left: -1rem;
margin-right: -1rem;

  @media (min-width: 980px) {
    display: flex;
    width: 50%;
    height: 100%;
    margin: 0;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
`

const Intro = styled.div`
  ${column}
  flex: 1;
  @media (min-width: 980px) {
    margin-top: 25vh;
  }
`

const Contact = styled.div`
  flex: 1;
  font-size: 14px;
  ${column}
  align-self: end;
`

const Content = styled.div`
  @media (min-width: 980px) {
    margin-top: 0;
    padding-left: 15rem;
    padding-bottom: 5rem;
  }  
`

function App ({children}) {
  const [state, setState] = useState({
    loading: true,
    choosenTheme: 'dark',
  })
  
  const { loading, choosenTheme } = state
  
  const { opacity } = useSpring({
    opacity: loading ? 0 : 1
  })

  useEffect(() => {
    let timer = setTimeout(() => setState(state => ({...state, loading: false})), 50)
    return () => clearTimeout(timer)
  }, [])

  const handleSwitchTheme = () => {
    if (choosenTheme === 'light') {
      setState({...state, choosenTheme: 'dark'}) 
    } else {        
      setState({...state, choosenTheme: 'light'}) 
    }
  }

  return (
    <animated.div className="App" style={{opacity: opacity.interpolate(o => 0 + o) }}>
      <ThemeProvider theme={theme[choosenTheme]}>
        <BaseStyles />
        <Hero>
          <Row>
            <Intro>    
              <Toggle handleClick={handleSwitchTheme} />
              <div>
                <p>Hello! I'm Inacio. I work and freelance as software engineer</p>
                <p>I've done some cool projects: <Link href="https://github.com/schweller/climma">Climma</Link>, <Link href="https://github.com/schweller/inacho">Inacho</Link> and <Link href="https://thesunda.itch.io/cast-die-repeat">Cast Die Repeat</Link>.</p>
              </div>
            </Intro>
            <Contact>
              <GetInTouch />
            </Contact>
          </Row>
        </Hero>
        <Content>
          {children}
        </Content>
      </ThemeProvider>
    </animated.div>
  )
}

export default App;
