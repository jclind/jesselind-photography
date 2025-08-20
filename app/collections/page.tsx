// 'use client'

// import React, { useState } from 'react'
// import Link from 'next/link'
// import styles from './page.module.scss'
// import { categories } from '@/data/categories'
// import LogoButton from '@/components/Common/LogoButton'

// const Collection = () => {
//   const [currHoveredName, setCurrHoveredName] = useState<string | null>(null)

//   const handleMouseOver = (hoveredName: string) => {
//     setCurrHoveredName(hoveredName)
//   }
//   const handleMouseLeave = () => setCurrHoveredName(null)

//   return (
//     <div className={styles.collection}>
//       <LogoButton />
//       <div className={styles.content}>
//         <Link href='/all-photos' className={styles.myPhotosLink}>
//           My Photos
//         </Link>

//         <div className={styles.links}>
//           {categories.map((category, index) => {
//             const isAnyHovered = currHoveredName !== null
//             const isHovered = currHoveredName === category.name
//             const currClass = !isAnyHovered
//               ? ''
//               : isHovered
//               ? styles.hovered
//               : styles.notHovered

//             return (
//               <Link
//                 key={category.name}
//                 href={category.path}
//                 onMouseOver={() => handleMouseOver(category.name)}
//                 onMouseLeave={handleMouseLeave}
//                 className={`${currClass} ${index > 3 ? styles.imgToTop : ''}`}
//               >
//                 <span className={styles.leftNumbers}>{`0${index + 1}`}</span>
//                 <span className={styles.name}>{category.name}</span>
//                 <div className={styles.imageContainer}>
//                   <img src={category.imgSrc} alt={category.name} />
//                 </div>
//                 <div className={styles.line}></div>
//               </Link>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Collection

// import Link from 'next/link'
// import styles from './page.module.scss'
// import { categories } from '@/data/categories'
// import LogoButton from '@/components/Common/LogoButton'

// export default function Collection() {
//   return (
//     <div className={styles.collection}>
//       <LogoButton />
//       <div className={styles.content}>
//         <Link href='/all-photos' className={styles.myPhotosLink}>
//           My Photos
//         </Link>

//         <div className={styles.links}>
//           {categories.map((category, index) => (
//             <Link
//               key={category.name}
//               href={category.path}
//               className={`${styles.link} ${index > 3 ? styles.imgToTop : ''}`}
//             >
//               <span className={styles.leftNumbers}>{`0${index + 1}`}</span>
//               <span className={styles.name}>{category.name}</span>
//               <div className={styles.imageContainer}>
//                 <img src={category.imgSrc} alt={category.name} />
//               </div>
//               <div className={styles.line}></div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// app/collection/page.tsx (Server Component)
import Link from 'next/link'
import styles from './page.module.scss'
import { categories } from '@/data/categories'
import LogoButton from '@/components/Common/LogoButton'
import HoverInteractivity from './HoverInteractivity'

const Collections = () => {
  return (
    <div className={styles.collection}>
      <LogoButton />
      <div className={styles.content}>
        <Link href='/all-photos' className={styles.myPhotosLink}>
          My Photos
        </Link>

        <div className={styles.links}>
          {categories.map((category, index) => (
            <Link
              key={category.name}
              href={category.path}
              className={index > 3 ? styles.imgToTop : ''}
              data-category-name={category.name}
            >
              <span className={styles.leftNumbers}>{`0${index + 1}`}</span>
              <span className={styles.name}>{category.name}</span>
              <div className={styles.imageContainer}>
                <img src={category.imgSrc} alt={category.name} />
              </div>
              <div className={styles.line}></div>
            </Link>
          ))}
        </div>

        {/* Client component for hover interactivity only */}
        <HoverInteractivity />
      </div>
    </div>
  )
}

export default Collections
