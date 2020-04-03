import { css } from 'styled-components'
 
export const color = {
  light: '#b12b2b',
  bgLight: '#ffffff',
  dark: '#fff',
  bgDark: '#222'
}

export const column = css`
  @media (min-width: 768px) {
    flex: 1;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (min-width: 980px) {
    flex-grow: 0;
    padding-left: 0;
    padding-right: 0;    
  }
`

export const theme = {
  light: {
    color: color.light,
    bgColor: color.bgLight,
    togglePosition: '0',
    togglePositionBg: '#888888',
  },
  dark: {
    color: color.dark,
    bgColor: color.bgDark,
    togglePosition: '11px',
    togglePositionBg: '#000000'
  }
}
