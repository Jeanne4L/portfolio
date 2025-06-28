import ContactIcons from "../../../components/ContactIcons"
import MosaicOverlay from "../../../components/MosaicOverlay"
import H1 from "../../../components/text/H1"
import H2 from "../../../components/text/H2"
import P from "../../../components/text/P"
import Span from "../../../components/text/Span"
import { contactStyle, Content, h1SpanStyle, HeroContainer, ImgContainer, ProfileImg, rotatedH1Style, Title } from "./styles"

const profileImg = '../../../../public/assets/images/profile.jpg'

const Hero = () => {
  return (
    <HeroContainer>
      <Title>
        <H1 style={rotatedH1Style}>Sandra</H1>
        <Span style={h1SpanStyle}>Petereau</Span>
      </Title>
      
      <ImgContainer>
        <ProfileImg src={profileImg} alt="Sandra Petereau" />
        <MosaicOverlay />
      </ImgContainer>
      
      <Content>
        <H2>Développeuse <Span colored bold>React</Span> junior</H2>
        <P>
          Deux ans d'alternance en développement React m'ont appris à concevoir des expériences qui combinent esthétisme et performance.
          <br />
          Concrétisons votre vision, pixel après pixel.
        </P>

        <ContactIcons style={contactStyle} />
      </Content>
    </HeroContainer>
  )
}

export default Hero