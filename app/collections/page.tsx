import Link from 'next/link'
import styles from './page.module.scss'
import { categories } from '@/data/categories'
import LogoButton from '@/components/Common/LogoButton'
import HoverInteractivity from './HoverInteractivity'

export const metadata = {
  title: 'Collections | Jesse Lind Photography',
  description: 'Browse photo collections by Jesse Lind',
}

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
              <span className={styles.leftNumbers}>{`${index < 9 ? '0' : ''}${
                index + 1
              }`}</span>
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
