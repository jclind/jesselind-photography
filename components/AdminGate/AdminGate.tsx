'use client'

import React, { useEffect, useState } from 'react'
import styles from './AdminGate.module.scss'

const EXPIRY_MS = 60 * 60 * 1000 // 1 hour

export const logout = () => {
  localStorage.removeItem('adminAuth')
  window.location.reload()
}

const AdminGate = ({ children }: { children: React.ReactNode }) => {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')

  useEffect(() => {
    const authData = localStorage.getItem('adminAuth')
    if (authData) {
      const { expiry } = JSON.parse(authData)
      if (Date.now() < expiry) {
        setAuthenticated(true)
      } else {
        localStorage.removeItem('adminAuth') // expired
      }
    }
  }, [])

  const handleLogin = () => {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASS) {
      const expiry = Date.now() + EXPIRY_MS
      localStorage.setItem('adminAuth', JSON.stringify({ expiry }))
      setAuthenticated(true)
    } else {
      alert('Wrong password ❌')
    }
  }

  if (!authenticated) {
    return (
      <div className={styles.adminGate}>
        <div className={styles.loginBox}>
          <h1>Admin Login</h1>
          <input
            type='password'
            placeholder='enter password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                handleLogin()
              }
            }}
          />
          {password.length > 0 && <button onClick={handleLogin}>Login</button>}
        </div>
      </div>
    )
  }

  return <>{children}</>
}

export default AdminGate
