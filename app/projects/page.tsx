import React from 'react'
import styles from './page.module.scss'
import LogoButton from '@/components/Common/LogoButton'
import { projects } from '@/data/projects'
import Link from 'next/link'

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
          {projects.map(project => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className={styles.projectCard}
            >
              <img src={project.posterUrl} alt='' />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
