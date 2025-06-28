export type ProjectType = {
  id: string
  name: string
  desktopImg: string[]
  mobileImg: string[]
  texts: string[]
  link: string 
  tags: string[]
  date: Date
}

export type ProjectsType = ProjectType[]