import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background: ${props => props.theme.bgColor};
    font-family: 'Roboto Mono', sans-serif;
    font-weight: 300;
    transition: background 0.25s linear;
  }

  a {
    color: ${props => props.theme.color};
    text-decoration: none;
    transition: color 0.25s linear;
  }

  .App {
    color: ${props => props.theme.color};
    margin-left: 2em;
    margin-right: 2em;
    transition: color 0.25s linear;
  }

  @media (min-width: 980px) {
    .App {
      margin-left: 5em;
      margin-right: 5em;
    }
  }
`
