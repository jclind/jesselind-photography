import React from 'react'
import CollectionGallery from './CollectionGallery'
import { use } from 'react'

export const generateMetadata = ({
  params,
}: {
  params: Promise<{ collectionID: string }>
}) => {
  const id = use(params).collectionID
  return {
    title: `${id} | Jesse Lind Photography`,
    description: `A Collection of photos in the ${id} category by Jesse Lind`,
  }
}

const CollectionPage = () => {
  return <CollectionGallery />
}

export default CollectionPage
