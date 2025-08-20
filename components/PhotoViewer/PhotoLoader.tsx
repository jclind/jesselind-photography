// components/PhotoLoader.tsx
import React, { useMemo } from 'react'
import styles from './PhotoViewer.module.scss'
import { useSearchParams } from 'next/navigation'

interface PhotoLoaderProps {
  showLoader: boolean
  timeoutMessage: string
}

const PhotoLoader = ({ showLoader, timeoutMessage }: PhotoLoaderProps) => {
  const searchParams = useSearchParams()

  // parse query params
  const { width, height } = useMemo(() => {
    const w = searchParams.get('width')
    const h = searchParams.get('height')

    return {
      width: w ? Number(w) : undefined,
      height: h ? Number(h) : undefined,
    }
  }, [searchParams])

  if (!showLoader && !timeoutMessage) return null
  return (
    <>
      {showLoader && <div className={styles.spinner}>Loading...</div>}
      {timeoutMessage && (
        <div className={styles.errorMessage}>{timeoutMessage}</div>
      )}
    </>
  )
}

export default PhotoLoader
