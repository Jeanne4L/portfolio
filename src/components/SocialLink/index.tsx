import type { JSX } from "react"
import { useNavigate } from "react-router"

import { Container } from "./styles"

type SocialLinkProps = {
  icon: JSX.Element
  link: string
  label: string
}

const SocialLink = ({ icon, link, label }: SocialLinkProps) => {
  const navigate = useNavigate()

  return (
    <Container onClick={() => navigate(link)}>
      {icon}
      <span>{label}</span>
    </Container>
  )
}

export default SocialLink