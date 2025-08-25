import React from 'react'
import CollectionsPhoto from './CollectionsPhoto'
import { use } from 'react'

export const generateMetadata = ({
  params,
}: {
  params: Promise<{ photoID: string }>
}) => {
  const id = use(params).photoID
  return {
    title: `${id} | Jesse Lind Photography`,
    description: `View photo ${id} by Jesse Lind`,
  }
}

const CollectionsPhotoPage = () => {
  return <CollectionsPhoto />
}

export default CollectionsPhotoPage
