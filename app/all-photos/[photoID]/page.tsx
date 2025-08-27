import SinglePhoto from './SinglePhoto'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ photoID: string }>
}) {
  const { photoID } = await params
  return {
    title: `${photoID || 'Photo'} | Jesse Lind Photography`,
    description: `View photo ${photoID || ''} by Jesse Lind`,
  }
}

interface PageProps {
  params: Promise<{ collectionID: string; photoID: string }>
}

const SinglePhotoPage = async ({ params }: PageProps) => {
  await params
  return <SinglePhoto />
}

export default SinglePhotoPage
