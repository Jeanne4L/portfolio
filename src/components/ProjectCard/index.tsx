import { Colors } from "../../constants/colors"
import Tag from "../Tag"
import { Container, NameContainer, TagsContainer } from "./styles"

type ProjectCardProps = {
  bgImg: string
  tags: string[] 
  name: string
  onClick: () => void
}

const ProjectCard = ({ bgImg, tags, name, onClick }: ProjectCardProps) => {
  return (
    <Container onClick={onClick}>
      <img src={bgImg} alt={name} loading="lazy" />
      <NameContainer>
        {name}
      </NameContainer>
      <TagsContainer>
        {tags.map((tag) => (
          <Tag text={tag} bgColor={Colors.VIOLET} key={tag} />
        ))}
      </TagsContainer>
    </Container>
  )
}

export default ProjectCard