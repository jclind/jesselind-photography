import React from 'react'
import styles from './page.module.scss'
import Link from 'next/link'

const AdminNav = () => {
  return (
    <div className={styles.adminNav}>
      <Link href='/admin'>Admin</Link>
    </div>
  )
}

export default AdminNav
