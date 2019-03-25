import React from 'react'

const links = [
  {
    href: `https://github.com/schweller`,
    display: `Github` 
  },
  {
    href: `https://codepen.io/schweller/`,
    display: `Codepen` 
  },
  {
    href: `https://thesunda.itch.io/`,
    display: `My games` 
  },
  {
    href: `https://www.linkedin.com/in/ischweller/`,
    display: `LinkedIn`
  }
]

function GetInTouchLink({link}) {
  return (
    <li>
      <a 
        className="underline-wave"
        target="_blank" 
        rel="noopener noreferrer"
        href={link.href}>
        {link.display}
      </a>
    </li>
  )  
}

function GetInTouch() {
  return (
    <>
      <ul>
        {links.map((link, key) => <GetInTouchLink key={key} link={link}/>)}
      </ul>
      What's next? <a className="underline-wave" href="mailto:iscmendonca@gmail.com">Say hello</a>! 
    </>
  )
}

export default GetInTouch