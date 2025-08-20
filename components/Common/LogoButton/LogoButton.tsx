import React from 'react'
import styles from './LogoButton.module.scss'
import Link from 'next/link'

const LogoButton = () => {
  return (
    <Link href='/' className={styles.nav_logo}>
      <img src='/images/logo.webp' />
    </Link>
  )
}

export default LogoButton
