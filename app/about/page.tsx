import React from 'react'
import styles from './page.module.scss'
import LogoButton from '@/components/Common/LogoButton'
import { CONTACT_LINKS } from '@/data/contact'

export const metadata = {
  title: 'About | Jesse Lind Photography',
  description: 'Learn more about Jesse Lind and his photography journey',
}

const About = () => {
  return (
    <div className={styles.About}>
      <LogoButton />
      <div className={styles.content}>
        <div className={styles.information}>
          <h1>Information</h1>
          <p>
            I’m Jesse, a hobbyist photographer with 10+ years of shooting
            experience, including two years of{' '}
            <a
              href='https://tookapic.com/ryak2002'
              target='_blank'
              rel='noopener noreferrer'
            >
              the Tookapic daily challenge
            </a>
            . I work across animals, landscapes, and urban scenes, and keep
            pushing into new genres.
          </p>
          <p>
            Design and visual style have always been part of my life, and I aim
            to keep refining my eye. If you’d like to see more of my creations
            check out{' '}
            <a
              href='https://jesselind.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              my personal website
            </a>
            .
          </p>
        </div>
        <div className={styles.contact}>
          <h1>Contact</h1>
          <div className={styles.contact_links}>
            {CONTACT_LINKS.map(link => (
              <div className={styles.contact_link} key={link.label}>
                <span className={styles.label}>{link.label}</span>
                <a href={link.link} target='_blank' rel='noopener noreferrer'>
                  {link.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
