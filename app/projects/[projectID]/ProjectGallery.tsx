import React from 'react'
import styles from './page.module.scss'
import { projects, ProjectType } from '@/data/projects'

type ProjectGalleryProps = {
  currProject: ProjectType
}

const ProjectGallery = ({ currProject }: ProjectGalleryProps) => {
  if (!currProject) {
    return <div>Project not found</div>
  }
  return null
}

export default ProjectGallery
