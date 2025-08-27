import React from 'react'
import styles from './page.module.scss'
import LogoButton from '@/components/Common/LogoButton'
import { projects } from '@/data/projects'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Projects | Jesse Lind Photography',
}

const ProjectsPage = () => {
  return (
    <div className={styles.projects}>
      <LogoButton />
      <div className={styles.content}>
        <h1>Projects</h1>
        <div className={styles.projectsList}>
          {projects.map((project, index) => (
            <div className={styles.projectWrapper} key={project.id}>
              <span className={styles.leftNumbers}>{`${index < 9 ? '0' : ''}${
                index + 1
              }`}</span>
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className={styles.projectCard}
              >
                <div className={styles.imageContainer}>
                  <picture>
                    <source
                      media='(max-width: 768px)'
                      srcSet={project.mobilePosterUrl}
                    />
                    <Image
                      src={project.posterUrl}
                      alt={project.name}
                      width={700}
                      height={700}
                      placeholder='blur'
                      blurDataURL={project.thumbnailUrl}
                      className={styles.projectImage}
                    />
                  </picture>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
