'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './PhotoViewer.module.scss'
import PhotoLoader from './PhotoLoader'
import PhotoImage from './PhotoImage'
import PhotoControls from './PhotoControls'
import { usePhotoCollection } from '@/hooks/usePhotoCollection'
import InfoDisplay from './InfoDisplay'
import { PhotoViewerFilterType, Photo } from '@/types/Photo'
import Link from 'next/link'
import {
  getAspectRatioFromPhoto,
  getPhotoWidthFromHeight,
} from '@/util/photoDimentionFns'
import { usePhotoStore } from '@/store/photoStore'
import LogoButton from '../Common/LogoButton'

interface PageProps {
  params: { photoID: string }
  filter?: PhotoViewerFilterType
  path: string
}

const PhotoViewerPage = ({ params, filter, path }: PageProps) => {
  const router = useRouter()
  const { photoID } = params

  const store = usePhotoStore()

  const { photo, prevPhoto, nextPhoto, timeoutMessage, collectionLoading } =
    usePhotoCollection({ initialPhotoID: photoID, filter })

  // Displayed photo state for smooth transitions
  const [displayedPhoto, setDisplayedPhoto] = useState<Photo | null>(photo)
  const [isLoading, setIsLoading] = useState(true)
  const [showLoader, setShowLoader] = useState(false)

  useEffect(() => {
    if (!isLoading && !collectionLoading) {
      setShowLoader(false) // immediately hide if not loading
      return
    }

    const timer = setTimeout(() => {
      setShowLoader(true)
    }, 250) // 250ms delay

    return () => clearTimeout(timer) // cleanup if loading finishes early
  }, [isLoading, collectionLoading])

  const getPhotoDimensionsOnPage = (
    photo: Photo
  ): { height: number; width: number } => {
    if (!photo) return { height: 0, width: 0 }
    const containerHeight =
      document.getElementById('photoContainer')?.clientHeight || 0
    return {
      width: Number(getPhotoWidthFromHeight(photo, containerHeight).toFixed(2)),
      height: Number(containerHeight.toFixed(2)),
    }
  }

  // Displayed photo updated after image fully loads
  useEffect(() => {
    if (!photo || !photo.fullUrl) return

    const cached = store.getPhoto(photo.id)
    if (cached?.preloadedUrl) {
      setDisplayedPhoto(cached.photo)
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    const img = new Image()
    img.src = photo.fullUrl
    img.onload = () => {
      setDisplayedPhoto(photo)
      setIsLoading(false)
    }
  }, [photo])

  // Preload next/prev photos and store in cache
  useEffect(() => {
    const preloadPhoto = (currPhoto: Photo | null) => {
      if (!currPhoto || !currPhoto.fullUrl) return
      const { width, height } = getPhotoDimensionsOnPage(currPhoto)
      const img = new Image()
      img.src = currPhoto.fullUrl
      store.addPhoto(currPhoto.id, {
        photo: currPhoto,
        preloadedUrl: img.src,
        width,
        height,
      })
    }

    preloadPhoto(prevPhoto)
    preloadPhoto(nextPhoto)
  }, [prevPhoto, nextPhoto])

  const handleClickPrev = () => {
    if (!prevPhoto) return
    router.push(`${path}/${prevPhoto.id}`)
  }

  const handleClickNext = () => {
    if (!nextPhoto) return
    router.push(`${path}/${nextPhoto.id}`)
  }

  return (
    <div className={styles.SinglePhoto}>
      <LogoButton />
      <div className={styles.content}>
        <div className={styles.inner} id='photoContainer'>
          <PhotoLoader
            showLoader={showLoader}
            timeoutMessage={timeoutMessage}
          />
          {displayedPhoto && (
            <PhotoImage photo={displayedPhoto} isLoading={isLoading} />
          )}
          <button
            onClick={handleClickPrev}
            className={styles.prev_btn}
          ></button>
          <button
            onClick={handleClickNext}
            className={styles.next_btn}
          ></button>
        </div>

        <PhotoControls
          handleClickPrev={handleClickPrev}
          handleClickNext={handleClickNext}
          path={path}
        />

        <InfoDisplay photoInfo={displayedPhoto} />
      </div>
    </div>
  )
}

export default PhotoViewerPage
