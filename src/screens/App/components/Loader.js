import React from 'react';
import { useSpring, animated } from 'react-spring'

export default function Loader() {
  const { dash } = useSpring({
    from: { dash: 102 },
    to: { dash: 0 }
  })
 
  return (
    <animated.svg opacity=".5" height="60" width="60" strokeDasharray={100} strokeDashoffset={dash}>
      <circle cx="30" cy="30" r="20" pathLength="100" stroke-width="5" fill="gray" stroke="black"/>
    </animated.svg>
  )
}
