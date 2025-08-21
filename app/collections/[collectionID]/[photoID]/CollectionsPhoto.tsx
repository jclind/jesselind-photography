'use client'

import PhotoViewer from '@/components/PhotoViewer'
import { PhotoViewerFilterType } from '@/types/Photo'
import Head from 'next/head'
import { useParams } from 'next/navigation'

const CollectionsPhotoPage = () => {
  const { collectionID, photoID } = useParams<{
    collectionID: string
    photoID: string
  }>()
  const filteredParams = { photoID }
  const path = `/collections/${collectionID}` // Define the path for navigation
  const filter: PhotoViewerFilterType = {
    field: 'category',
    value: collectionID,
  } // Example filter, adjust as needed
  return (
    <>
      <Head>
        <title>{`${photoID} | Jesse Lind Photography`}</title>
      </Head>
      <PhotoViewer params={filteredParams} path={path} filter={filter} />
    </>
  )
}

export default CollectionsPhotoPage
