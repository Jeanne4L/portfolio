import { Colors } from "../../constants/colors"
import { Container } from "./styles"

type TagProps = {
  text: string
  bgColor?: string
}

const Tag = ({ text, bgColor = Colors.BLACK }: TagProps) => {
  return (
    <Container bgColor={bgColor}>{text}</Container>
  )
}

export default Tag