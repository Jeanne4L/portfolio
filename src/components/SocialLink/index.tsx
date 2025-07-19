import type { JSX } from "react"

import { Container } from "./styles"

type SocialLinkProps = {
  icon: JSX.Element
  link: string
  label: string
}

const SocialLink = ({ icon, link, label }: SocialLinkProps) => {
  return (
    <Container href={link}>
      {icon}
      <span>{label}</span>
    </Container>
  )
}

export default SocialLink