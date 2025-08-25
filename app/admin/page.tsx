import Link from 'next/link'
import React from 'react'
import styles from './page.module.scss'
import { ImageUp, Settings } from 'lucide-react'
import AdminNav from './AdminNav'
import AdminGate from '@/components/AdminGate'

const AdminPage = () => {
  return (
    <AdminGate>
      <div className={styles.adminPage}>
        <AdminNav />
        <div className={styles.links}>
          <Link href='/admin/add-photo'>
            <ImageUp strokeWidth={1} />
            Add Photo
          </Link>
          <Link href='/admin/settings'>
            <Settings strokeWidth={1} />
            Settings
          </Link>
        </div>
      </div>
    </AdminGate>
  )
}

export default AdminPage
