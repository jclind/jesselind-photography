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
          aria-label='Link to photo 00176'
        >
          <img
            src='/images/home/1.webp'
            alt='Rainbow falling on dark mountain'
          />
        </Link>
        <Link
          href='/all-photos/00130'
          className={`${styles.displayedImg} ${styles.img2}`}
          aria-label='Link to photo 00130'
        >
          <img src='/images/home/2.webp' alt='Two people with blue umbrellas' />
        </Link>
        <Link
          href='/all-photos/00170'
          className={`${styles.displayedImg} ${styles.img3}`}
          aria-label='Link to photo 00170'
        >
          <img
            src='/images/home/3.webp'
            alt='Ferris wheel with blue sky backdrop'
          />
        </Link>
        <Link
          href='/all-photos/00173'
          className={`${styles.displayedImg} ${styles.img4}`}
          aria-label='Link to photo 00173'
        >
          <img src='/images/home/4.webp' alt='Cat sitting on fence' />
        </Link>
        <Link
          href='/all-photos/00138'
          className={`${styles.displayedImg} ${styles.img5}`}
          aria-label='Link to photo 00138'
        >
          <img src='/images/home/5.webp' alt='Cat sitting upright' />
        </Link>
        <Link
          href='/all-photos/00174'
          className={`${styles.displayedImg} ${styles.img6}`}
          aria-label='Link to photo 00174'
        >
          <img src='/images/home/6.webp' alt='Building with sunset sky' />
        </Link>
        <Link
          href='/all-photos/00181'
          className={`${styles.displayedImg} ${styles.img7}`}
          aria-label='Link to photo 00181'
        >
          <img src='/images/home/7.webp' alt='Boat docked in harbor' />
        </Link>
        <Link
          href='/all-photos/00188'
          className={`${styles.displayedImg} ${styles.img8}`}
          aria-label='Link to photo 00188'
        >
          <img
            src='/images/home/8.webp'
            alt='Two birds standing in beach waves'
          />
        </Link>
        <Link
          href='/all-photos/00185'
          className={`${styles.displayedImg} ${styles.img9}`}
          aria-label='Link to photo 00185'
        >
          <img
            src='/images/home/9.webp'
            alt='Group of seagulls flying above lake at beach'
          />
        </Link>
      </div>
    </div>
  )
}
