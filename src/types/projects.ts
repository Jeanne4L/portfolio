export type ProjectType = {
  id: string
  name: string
  tagline: string
  desktopImg: string[]
  mobileImg: string[]
  texts: string[]
  link: string 
  tags: string[]
  website?: string
  repo?: string
}

export type ProjectsType = ProjectType[]