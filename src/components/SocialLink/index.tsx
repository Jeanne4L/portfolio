import type { JSX } from "react"
import { useNavigate } from "react-router"

import { Container } from "./styles"

type SocialLinkProps = {
  icon: JSX.Element
  link: string
}

const SocialLink = ({ icon, link }: SocialLinkProps) => {
  const navigate = useNavigate()

  return (
    <Container onClick={() => navigate(link)}>
      {icon}
    </Container>
  )
}

export default SocialLink