import { useEffect, useState } from "react"
import { useParams } from "react-router"

import { projects } from "../../data/projects"
import { mergeAlternating } from "../../helpers/mergeAlternating"
import { useMediaQuery } from "../../hooks/useMediaQuery"
import type { ProjectType } from "../../types/projects"
import { Breakpoints } from "../../constants/breakpoints"
import withPageStructure from "../../hoc/withPageStructure"
import Hero from "./Hero"
import { ImgContainer, ProjectImages } from "./styles"

const ProjectPage = () => {
  const [project, setProject] = useState<ProjectType | null>(null)
  const [error, setError] = useState<string | null>(null)

  const { projectUri } = useParams()

  const isDesktop = useMediaQuery(`(min-width: ${Breakpoints.TABLET})`)

  useEffect(() => {
    const projectApi = projects.find((project) => project.link === projectUri)

    if(!projectApi) {
      setError('Error while fetching project')
    } else {
      setProject(projectApi)
    }
  }, [projectUri])

  if(!project || error) {
    return
  }

  const images = mergeAlternating(project.mobileImg, project.desktopImg)

  return (
    <>
      <Hero project={project} imgUrl={images[0]} />

      <ProjectImages>
        {images.slice(1).map((image, index) => (
          <ImgContainer 
            isDesktop={index % 2 === 0} 
            isBlackBg={isDesktop ? index % 3 === 0 : index % 2 !== 0 }
            key={`${index % 2 === 0 ? 'desktop' : 'mobile' }-${index}`}
          >
            <img src={image} alt={`${project.name} ${index % 2 === 0 ? 'desktop' : 'mobile'}`} loading='lazy' />
          </ImgContainer>
        ))}
      </ProjectImages>
    </>
  )
} 

export default withPageStructure(ProjectPage)