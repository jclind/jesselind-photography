'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.scss'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => setIsOpen(state => !state)

  // Lock/unlock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed' // helps on iOS to stop bounce
      document.body.style.width = '100%' // prevents layout shift
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isOpen])

  const links = [
    { name: 'Home', src: '/' },
    { name: 'Collections', src: '/collections' },
    { name: 'All Photos', src: '/all-photos' },
    { name: 'About', src: '/about' },
    {
      name: 'jesselind.com',
      src: 'https://jesselind.com/',
      shouldOpenInNewTab: true,
    },
  ]

  const handleNavClick = () => {
    setTimeout(() => {
      setIsOpen(false) // close the menu after a click
    }, 200) // slight delay to allow click to register before closing
  }

  return (
    <>
      <button className={styles.hamburger} onClick={toggleIsOpen} tabIndex={0}>
        <span
          className={`${styles.top} ${isOpen ? styles.topOpen : ''}`}
        ></span>
        <span
          className={`${styles.middle} ${isOpen ? styles.middleOpen : ''}`}
        ></span>
        <span
          className={`${styles.bottom} ${isOpen ? styles.bottomOpen : ''}`}
        ></span>
      </button>

      <div className={`${styles.navbar} ${isOpen ? styles.navOpen : ''}`}>
        <div className={styles.links}>
          {links.map((link, idx) =>
            link.shouldOpenInNewTab ? (
              <a
                key={idx}
                href={link.src}
                target='_blank'
                rel='noopener noreferrer'
              >
                {link.name}
              </a>
            ) : (
              <Link key={idx} href={link.src} onClick={handleNavClick}>
                {link.name}
              </Link>
            )
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar
