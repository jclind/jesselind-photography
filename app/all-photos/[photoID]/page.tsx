import SinglePhoto from './SinglePhoto'

interface PageProps {
  params: { photoID: string }
}
export const generateMetadata = async ({ params }: PageProps) => {
  const id = await params.photoID
  return {
    title: `${id} | Jesse Lind Photography`,
    description: `View photo ${id} by Jesse Lind`,
  }
}

const SinglePhotoPage = () => {
  return <SinglePhoto />
}

export default SinglePhotoPage
