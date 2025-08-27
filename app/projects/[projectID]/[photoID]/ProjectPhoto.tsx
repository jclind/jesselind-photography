'use client'

import PhotoViewer from '@/components/PhotoViewer'
import { PhotoViewerFilterType } from '@/types/Photo'
import Head from 'next/head'
import { useParams } from 'next/navigation'

const ProjectPhoto = () => {
  const { projectID, photoID } = useParams<{
    projectID: string
    photoID: string
  }>()
  const filteredParams = { photoID }
  const path = `/projects/${projectID}` // Define the path for navigation
  const filter: PhotoViewerFilterType = {
    field: 'projectID',
    value: projectID,
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

export default ProjectPhoto
