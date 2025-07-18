import type { ReactNode } from "react"

export type ProjectType = {
  id: string
  name: string
  tagline: string
  preview: string
  desktopImg: string[]
  mobileImg: string[]
  texts: ReactNode
  link: string 
  tags: string[]
  website?: string
  repo?: string
}

export type ProjectsType = ProjectType[]