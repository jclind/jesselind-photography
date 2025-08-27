'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.scss'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleIsOpen = () => setIsOpen(state => !state)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

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
    { name: 'Projects', src: '/projects' },
    { name: 'Collections', src: '/collections' },
    { name: 'All Photos', src: '/all-photos' },
    { name: 'About', src: '/about' },
    {
      name: 'jesselind.com',
      src: 'https://jesselind.com/',
      shouldOpenInNewTab: true,
    },
  ]

  return (
    <>
      <button
        className={styles.hamburger}
        onClick={toggleIsOpen}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
      >
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

      <header>
        <nav
          className={`${styles.navbar} ${isOpen ? styles.navOpen : ''}`}
          hidden={!isOpen}
        >
          <div className={styles.links}>
            {links.map((link, idx) =>
              link.shouldOpenInNewTab ? (
                <a
                  key={idx}
                  href={link.src}
                  target='_blank'
                  rel='noopener noreferrer'
                  tabIndex={isOpen ? 0 : -1}
                >
                  {link.name}
                </a>
              ) : (
                <Link key={idx} href={link.src} tabIndex={isOpen ? 0 : -1}>
                  {link.name}
                </Link>
              )
            )}
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
