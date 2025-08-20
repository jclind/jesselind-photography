import { Photo } from '@/types/Photo'
import { useEffect } from 'react'

function usePreloadPhotos(prevPhoto: Photo | null, nextPhoto: Photo | null) {
  useEffect(() => {
    if (!prevPhoto?.fullUrl || !nextPhoto?.fullUrl) return
    if (prevPhoto) {
      const img = new Image()
      img.src = prevPhoto.fullUrl
    }
    if (nextPhoto) {
      const img = new Image()
      img.src = nextPhoto.fullUrl
    }
  }, [prevPhoto, nextPhoto])
}
