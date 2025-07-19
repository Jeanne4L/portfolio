import Chevron from "../icons/Chevron"
import { AnimatedContent, Container } from "./styles"

type ScrollIndicatorProps = {
  onClick: () => void
}

const ScrollIndicator = ({ onClick }: ScrollIndicatorProps) => {
  return (
    <Container onClick={onClick}>
      <AnimatedContent>
        <Chevron />
      </AnimatedContent>
    </Container>
  )
}

export default ScrollIndicator