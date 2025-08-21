import React from 'react'
import CollectionGallery from './CollectionGallery'

export const generateMetadata = async ({
  params,
}: {
  params: { collectionID: string }
}) => {
  const collectionID = await params.collectionID
  return {
    title: `${collectionID} | Jesse Lind Photography`,
    description: `A Collection of photos in the ${collectionID} category by Jesse Lind`,
  }
}

const CollectionPage = () => {
  return <CollectionGallery />
}

export default CollectionPage
