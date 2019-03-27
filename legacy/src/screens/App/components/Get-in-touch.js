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
  },
  {
    href: `/inacio-schweller-resume.pdf`,
    display: `Full Resumé`
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
      <p>You will find me @</p>
      <ul>
        {links.map((link, key) => <GetInTouchLink key={key} link={link}/>)}
      </ul>
      What's next? Say <a className="underline-wave" href="mailto:hi@inacio.dev">hi@inacio.dev</a>! 
    </>
  )
}

export default GetInTouch