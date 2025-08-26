'use client'

import React, { useEffect, useState } from 'react'

import styles from './GalleryTemplate.module.scss'
import { storeImageInSession } from './GalleryTemplate'
import { Photo, PhotoRowsType } from '@/types/Photo'
import Link from 'next/link'
import { getAspectRatioFromPhoto } from '@/util/photoDimentionFns'

const PhotoRows = ({
  photos,
  createFullImagePath,
}: {
  photos: Photo[]
  createFullImagePath: (photo: Photo) => string
}) => {
  const [formattedPhotos, setFormattedPhotos] = useState<PhotoRowsType[]>([])

  useEffect(() => {
    // Function to calculate the optimal height and number of photos to place in gallery row
    const calculatePhotosRows = (originalPhotos: Photo[]) => {
      const pageHeight = window.innerHeight
      const MAX_ROW_HEIGHT = Math.min(700, pageHeight)
      const PREFERRED_ROW_HEIGHT = 600

      const photoRows: { rowPhotos: Photo[]; height: number }[] = []
      let currRowIndex = 0
      console.log('pageHeight', pageHeight)
      console.log('MAX_ROW_HEIGHT', MAX_ROW_HEIGHT)
      originalPhotos.map((photo, index, origArr) => {
        const currR = getAspectRatioFromPhoto(photo)
        const pageW = window.innerWidth
        let rowHeight = 0

        if (currRowIndex >= photoRows.length) {
          rowHeight = pageW / currR
          photoRows.push({
            rowPhotos: [photo],
            height:
              rowHeight > MAX_ROW_HEIGHT ? PREFERRED_ROW_HEIGHT : rowHeight,
          })
        } else {
          const newRowPhotos = [...photoRows[currRowIndex].rowPhotos, photo]
          const currRowRatioSum = newRowPhotos.reduce(
            (sum, rowPhoto) => sum + getAspectRatioFromPhoto(rowPhoto),
            0
          )
          rowHeight = pageW / currRowRatioSum

          photoRows[currRowIndex] = {
            rowPhotos: newRowPhotos,
            height: rowHeight,
          }
        }

        if (rowHeight <= MAX_ROW_HEIGHT) {
          currRowIndex++
        }
      })

      return photoRows
    }

    const newPhotos = photos.length > 0 ? calculatePhotosRows(photos) : []
    setFormattedPhotos(newPhotos)
  }, [photos])
  if (formattedPhotos.length <= 0) return null

  return (
    <div className={styles.photos_row}>
      {formattedPhotos.map((row, index) => {
        return (
          <div
            className={styles.row}
            style={{ height: row.height }}
            key={index}
          >
            {row.rowPhotos.map(photo => {
              const r = getAspectRatioFromPhoto(photo)
              const h = row.height
              const w = h * r

              return (
                <Link
                  href={createFullImagePath(photo)}
                  onClick={() => storeImageInSession(photo)}
                  data-astro-prefetch='hover'
                  key={photo.id}
                  onMouseEnter={() => {
                    if (photo.fullUrl) {
                      const img = new Image()
                      img.src = photo.fullUrl
                    }
                  }}
                >
                  <img src={photo.fullUrl} height={h} width={w} />
                </Link>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default PhotoRows
