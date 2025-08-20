'use client'

import PhotoViewer from '@/components/PhotoViewer'

interface PageProps {
  params: { photoID: string }
}

const AllPhotosPage = ({ params }: PageProps) => {
  const path = '/all-photos' // Define the path for navigation
  return <PhotoViewer params={params} path={path} />
}

export default AllPhotosPage
