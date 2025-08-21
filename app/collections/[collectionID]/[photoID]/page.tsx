import React from 'react'
import CollectionsPhoto from './CollectionsPhoto'

export const generateMetadata = async ({
  params,
}: {
  params: { photoID: string }
}) => {
  const id = await params.photoID
  return {
    title: `${id} | Jesse Lind Photography`,
    description: `View photo ${id} by Jesse Lind`,
  }
}

const CollectionsPhotoPage = () => {
  return <CollectionsPhoto />
}

export default CollectionsPhotoPage
