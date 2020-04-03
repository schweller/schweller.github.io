import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const Toggle = styled.div`
  border: 1px solid #fff;
  background: ${props => props.bg};
  cursor: pointer;
  padding: 3px;
  width: 33px;
  height: 20px;
  border-radius: 33.5px;
  margin-right: 5px;
  position: relative;
  box-shadow: 0px 0px 1px inset rgba(0, 0, 0, .2);
  transition: all 0.2s;
`

const ToggleSwitch = styled.div`
  height: 14px;
  width: 26px;
  transition: all 0.2s;
  position: relative;
`

const Ball = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fff;
  transition: all 0.2s;
  position: absolute;
  top: -1px;
  left: ${props => props.position};
`

const ToggleWrapper = ({handleClick}) => {
  const theme = useContext(ThemeContext);

  return (
    <Toggle onClick={handleClick} bg={theme.togglePositionBg}>
      <ToggleSwitch>
        <Ball position={theme.togglePosition} />
      </ToggleSwitch>
    </Toggle>
  )
}

export default ToggleWrapper;