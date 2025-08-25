import React from 'react'
import CollectionGallery from './CollectionGallery'
import { use } from 'react'

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ collectionID: string }>
}) => {
  const { collectionID } = await params
  return {
    title: `${collectionID} | Jesse Lind Photography`,
    description: `A Collection of photos in the ${collectionID} category by Jesse Lind`,
  }
}

interface PageProps {
  params: Promise<{ collectionID: string }>
}

const CollectionPage = async ({ params }: PageProps) => {
  await params
  return <CollectionGallery />
}

export default CollectionPage
