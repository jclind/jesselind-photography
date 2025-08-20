import { Photo } from '@/types/Photo'

export const getAspectRatioFromPhoto = (photo: Photo): number => {
  return photo.width / photo.height
}

export const getPhotoWidthFromHeight = (
  photo: Photo,
  height: number
): number => {
  if (!photo || !height) return 0
  const aspectRatio = getAspectRatioFromPhoto(photo)
  console.log('photo', photo)
  return height * aspectRatio
}
