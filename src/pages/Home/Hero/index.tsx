import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

import ContactIcons from "../../../components/ContactIcons"
import MosaicOverlay from "../../../components/MosaicOverlay"
import ScrollIndicator from "../../../components/ScrollIndicator"
import H1 from "../../../components/text/H1"
import H2 from "../../../components/text/H2"
import P from "../../../components/text/P"
import Span from "../../../components/text/Span"
import { contactStyle, Content, h1SpanStyle, HeroContainer, ImgContainer, ProfileImg, rotatedH1Style, Title } from "./styles"

const profileImg = '../../../../public/assets/images/profile.jpg'

const Hero = () => {
  const [isIndicatorVisible, setIsIndicatorVisible] = useState<boolean>(true)

  const navigate = useNavigate()

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY < 1) {
        setIsIndicatorVisible(true)
      } else {
        setIsIndicatorVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])
  
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
          Pixels alignés, états maîtrisés, structure pensée.
        </P>
        <P>
          Le front-end, c'est l'articulation de l'intuition visuelle et de la rigueur logique.
        </P>

        <ContactIcons style={contactStyle} />
      </Content>

      {isIndicatorVisible && <ScrollIndicator onClick={() => navigate('#projects')} />}
    </HeroContainer>
  )
}

export default Hero