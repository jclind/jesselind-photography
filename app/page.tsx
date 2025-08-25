import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.scss'

export const metadata = {
  title: 'Home | Jesse Lind Photography',
}
export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <img
          src='/images/logo.webp'
          alt='Jesse Lind Photography Logo'
          className={styles.logo}
        />
        <Link
          href='/all-photos/00176'
          className={`${styles.displayedImg} ${styles.img1}`}
        >
          <img src='/images/home/1.webp' alt='' />
        </Link>
        <Link
          href='/all-photos/00130'
          className={`${styles.displayedImg} ${styles.img2}`}
        >
          <img src='/images/home/2.webp' alt='' />
        </Link>
        <Link
          href='/all-photos/00170'
          className={`${styles.displayedImg} ${styles.img3}`}
        >
          <img src='/images/home/3.webp' alt='' />
        </Link>
        <Link
          href='/all-photos/00173'
          className={`${styles.displayedImg} ${styles.img4}`}
        >
          <img src='/images/home/4.webp' alt='' />
        </Link>
        <Link
          href='/all-photos/00138'
          className={`${styles.displayedImg} ${styles.img5}`}
        >
          <img src='/images/home/5.webp' alt='' />
        </Link>
        <Link
          href='/all-photos/00174'
          className={`${styles.displayedImg} ${styles.img6}`}
        >
          <img src='/images/home/6.webp' alt='' />
        </Link>
        <Link
          href='/all-photos/00181'
          className={`${styles.displayedImg} ${styles.img7}`}
        >
          <img src='/images/home/7.webp' alt='' />
        </Link>
        <Link
          href='/all-photos/00188'
          className={`${styles.displayedImg} ${styles.img8}`}
        >
          <img src='/images/home/8.webp' alt='' />
        </Link>
        <Link
          href='/all-photos/00185'
          className={`${styles.displayedImg} ${styles.img9}`}
        >
          <img src='/images/home/9.webp' alt='' />
        </Link>
      </div>
    </div>
  )
}
