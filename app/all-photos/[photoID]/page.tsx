import SinglePhoto from './SinglePhoto'
import { use } from 'react'

export function generateMetadata({
  params,
}: {
  params: Promise<{ photoID: string }>
}) {
  const id = use(params).photoID
  return {
    title: `${id} | Jesse Lind Photography`,
    description: `View photo ${id} by Jesse Lind`,
  }
}

const SinglePhotoPage = () => {
  return <SinglePhoto />
}

export default SinglePhotoPage
