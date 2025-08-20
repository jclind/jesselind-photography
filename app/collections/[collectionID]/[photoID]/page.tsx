'use client'

import PhotoViewer from '@/components/PhotoViewer'
import { PhotoViewerFilterType } from '@/types/Photo'

interface PageProps {
  params: { collectionID: string; photoID: string }
}

const CollectionsPhotoPage = ({ params }: PageProps) => {
  const { collectionID, photoID } = params
  const filteredParams = { photoID }
  const path = `/collections/${collectionID}` // Define the path for navigation
  const filter: PhotoViewerFilterType = {
    field: 'category',
    value: params.collectionID,
  } // Example filter, adjust as needed
  return <PhotoViewer params={filteredParams} path={path} filter={filter} />
}

export default CollectionsPhotoPage
