import Link from 'next/link'
import React from 'react'
import styles from './page.module.scss'

const NotFoundPage = () => {
  return (
    <>
      <div className={styles.notFoundPage}>
        <h1>Page Not Found</h1>
        <Link href='/all-photos/00176'>Home</Link>
      </div>
    </>
  )
}

export default NotFoundPage
