import { useNavigate } from "react-router"

import Logo from "../../../components/icons/Logo"
import { Container } from "./styles"

const Header = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Logo onClick={() => navigate('/')} />
    </Container>
  )
}

export default Header