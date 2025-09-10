'use client'

import React from 'react'
import styles from './LogoButton.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LogoButton = () => {
  const pathname = usePathname()

  // Only show LogoButton if NOT on the homepage
  const showLogo = pathname !== '/' && !pathname.includes('admin')
  if (!showLogo) return null
  return (
    <Link href='/' className={styles.nav_logo} aria-label='Home link'>
      <img src='/images/logo.webp' alt='jesse lind photography logo' />
    </Link>
  )
}

export default LogoButton
