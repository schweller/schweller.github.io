import React from 'react'
import styles from './Social.module.scss';

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
    href: `https://stackoverflow.com/users/4957796/inacio-schweller`,
    display: `StackOverflow`
  },
  {
    href: `https://www.hackerrank.com/schweller`,
    display: `HackerRank`
  },
  {
    href: `https://www.linkedin.com/in/ischweller/`,
    display: `LinkedIn`
  },
  {
    href: `https://thesunda.itch.io/`,
    display: `Itch.io` 
  }
]

const Social = () => {
  return (
    <div className={styles['contact']}>
      <p className={styles['contact__paragraph']}>You will find me @</p>
      <ul className={styles['contact__list']}>
        {links.map((link, key) => (
          <li key={key} className={styles['contact__list-item']}>
            <a 
              className={styles['contact__list-item-link']}
              target="_blank" 
              rel="noopener noreferrer"
              href={link.href}>
              {link.display}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Social