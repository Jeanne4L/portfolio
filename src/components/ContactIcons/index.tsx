import type { CSSProperties } from "react"

import { contactLinks } from "../../data/contact"
import SocialLink from "../SocialLink"
import { Container } from "./styles"

type ContactIconsProps = {
  style?: CSSProperties
}

const ContactIcons = ({ style }: ContactIconsProps) => {
  return (
    <Container style={style}>
      {contactLinks.map((social) => (
        <SocialLink icon={social.icon} link={social.link} key={social.name} />
      ))}
    </Container>
  )
}

export default ContactIcons