import React from 'react'
import ProjectPhoto from './ProjectPhoto'

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ photoID: string }>
}) => {
  const { photoID } = await params
  return {
    title: `${photoID} | Jesse Lind Photography`,
    description: `View photo ${photoID} by Jesse Lind`,
  }
}

interface PageProps {
  params: Promise<{ projectID: string; photoID: string }>
}

const CollectionsPhotoPage = async ({ params }: PageProps) => {
  await params
  return <ProjectPhoto />
}

export default CollectionsPhotoPage
