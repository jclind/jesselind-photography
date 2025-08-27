'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.scss'

const BREAKPOINT_LG = 992

const HoverInteractivity = () => {
  const [currHoveredName, setCurrHoveredName] = useState<string | null>(null)

  useEffect(() => {
    if (window.innerWidth < BREAKPOINT_LG) return
    const links = document.querySelectorAll(`[data-category-name]`)

    const handleMouseOver = (event: Event) => {
      const target = event.currentTarget as HTMLElement
      const categoryName = target.getAttribute('data-category-name')
      if (categoryName) {
        setCurrHoveredName(categoryName)
      }
    }

    const handleMouseLeave = () => {
      setCurrHoveredName(null)
    }

    // Add event listeners
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseOver)
      link.addEventListener('mouseleave', handleMouseLeave)
    })

    // Cleanup
    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseOver)
        link.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  useEffect(() => {
    if (window.innerWidth < BREAKPOINT_LG) return
    const links = document.querySelectorAll(`[data-category-name]`)
    const isAnyHovered = currHoveredName !== null

    links.forEach(link => {
      const categoryName = link.getAttribute('data-category-name')
      const isHovered = currHoveredName === categoryName

      // Remove all hover-related classes
      link.classList.remove(styles.hovered, styles.notHovered)

      // Add appropriate class based on hover state
      if (isAnyHovered) {
        if (isHovered) {
          link.classList.add(styles.hovered)
        } else {
          link.classList.add(styles.notHovered)
        }
      }
    })
  }, [currHoveredName])

  // This component renders nothing - it only adds interactivity
  return null
}

export default HoverInteractivity
