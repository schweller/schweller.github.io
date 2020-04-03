import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
  font-weight: 500;
  text-decoration: none;
`

const Link = ({href, children}) => {
  return (
    <StyledLink  
      href={href}
      target="_blank" 
      rel="noopener noreferrer"        
      >{children}
    </StyledLink>
  )
}

export default Link;
