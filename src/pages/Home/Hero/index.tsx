import ContactIcons from "../../../components/ContactIcons"
import H1 from "../../../components/text/H1"
import H2 from "../../../components/text/H2"
import P from "../../../components/text/P"
import Span from "../../../components/text/Span"
import MaxWidthSection from "../../parts/MaxWidthSection"
import { contactStyle, Content, h1SpanStyle, rotatedH1Style, Title } from "./styles"

const Hero = () => {
  return (
    <MaxWidthSection>
      <Title>
        <H1 style={rotatedH1Style}>Sandra</H1>
        <Span style={h1SpanStyle}>Petereau</Span>
      </Title>

      <Content>
        <H2>Développeuse <Span colored bold>React</Span> junior</H2>
        <P>
          Après deux ans d'alternance en React, je suis impatiente de mettre mes compétences au service d'une première opportunité professionnelle. 
          <br />
          Mon portfolio présente une sélection de mes projets scolaires.
        </P>

        <ContactIcons style={contactStyle} />
      </Content>
    </MaxWidthSection>
  )
}

export default Hero