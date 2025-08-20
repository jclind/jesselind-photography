'use client'

import React from 'react'
import {
  collection,
  query,
  orderBy,
  startAfter,
  limit,
  getDocs,
  where,
  type QueryDocumentSnapshot,
  type DocumentData,
} from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Photo } from '@/types/Photo'
import GalleryTemplate from '@/components/GalleryTemplate'
import { categories } from '@/data/categories'

const PAGE_SIZE = 10

interface PageProps {
  params: { collectionID: string }
}

const CollectionGallery = ({ params }: PageProps) => {
  const { collectionID } = params
  const category = categories.find(cat => cat.name === collectionID)

  const imagePath = `/collections/${collectionID}`

  if (!category) {
    return <div>Collection not found</div>
  }

  const fetchPhotos = async (lastDoc?: QueryDocumentSnapshot) => {
    const photosRef = collection(db, 'photos')
    // Create the query filtered by category
    const q = lastDoc
      ? query(
          photosRef,
          where('category', '==', collectionID),
          orderBy('createdAt', 'desc'),
          startAfter(lastDoc),
          limit(PAGE_SIZE)
        )
      : query(
          photosRef,
          where('category', '==', collectionID),
          orderBy('createdAt', 'desc'),
          limit(PAGE_SIZE)
        )

    const snapshot = await getDocs(q)

    if (snapshot.empty) {
      console.log('FetchPhotos 3: its empty?')
      return { photos: [], lastDoc: null }
    }

    const photos: Photo[] = snapshot.docs.map(doc => doc.data() as Photo)
    const newLastDoc = snapshot.docs[snapshot.docs.length - 1]

    return { photos, lastDoc: newLastDoc }
  }
  return (
    <GalleryTemplate
      fetchPhotos={fetchPhotos}
      pageSize={PAGE_SIZE}
      imagePath={imagePath}
    />
  )
}

export default CollectionGallery

// import { categories } from '@/data/categories'
// import React from 'react'

// const CollectionGallery = ({ params }: PageProps) => {

//   return <CollectionGallery collectionID={collectionID} />
// }

// export default CollectionGallery
