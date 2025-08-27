import React from 'react'
import styles from './page.module.scss'
import Link from 'next/link'
import { logout } from '@/components/AdminGate/AdminGate'

const AdminNav = () => {
  return (
    <div className={styles.adminNav}>
      <Link href='/admin'>Admin</Link>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default AdminNav
