import withPageStructure from "../../hoc/withPageStructure"
import { projects } from "../../data/projects"
import Hero from "./Hero"
import ProjectsSection from "./ProjectsSection"

const Home = () => {
  return (
    <div>
      <Hero />

      <ProjectsSection projects={projects} />
    </div>
  )
}

export default withPageStructure(Home)