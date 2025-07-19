import { useNavigate } from "react-router"

import ProjectCard from "../../../components/ProjectCard"
import type { ProjectsType } from "../../../types/projects"
import { Container } from "./styles"

type ProjectsSectionProps = {
  projects: ProjectsType
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  const navigate = useNavigate()

  return (
    <Container id="projects">
      {projects.map((project) => (
        <ProjectCard 
          bgImg={project.preview} 
          tags={project.tags} 
          name={project.name} 
          onClick={() => navigate(project.link)}
          key={project.id} 
        />
      ))}
    </Container>
  )
}

export default ProjectsSection