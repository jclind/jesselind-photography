import React from 'react'
import styles from './LogoButton.module.scss'
import Link from 'next/link'

const LogoButton = () => {
  return (
    <Link href='/' className={styles.nav_logo} aria-label='Home link'>
      <img src='/images/logo.webp' alt='jesse lind photography logo' />
    </Link>
  )
}

export default LogoButton
