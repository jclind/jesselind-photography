'use client'

import React from 'react'
import styles from '../page.module.scss'
import { reSerializePhotos } from '@/util/reSerializePhotos'
import AdminNav from '../AdminNav'

const SettingsPage = () => {
  const handleReSerializeClick = () => {
    reSerializePhotos()
  }
  return (
    <div className={styles.settingsPage}>
      <AdminNav />
      <div className={styles.buttons}>
        <button onClick={handleReSerializeClick}>
          Re-serialize Image Database
        </button>
      </div>
    </div>
  )
}

export default SettingsPage
