import { useNavigate } from "react-router"

import ContactIcons from "../../../components/ContactIcons"
import Logo from "../../../components/icons/Logo"
import DownloadIcon from "../../../components/icons/Download"
import Span from "../../../components/text/Span"
import P from "../../../components/text/P"
import { projects } from "../../../mocks/projects"
import MaxWidthSection from "../MaxWidthSection"
import { Container, copyrightStyle, DownloadLink, List, Nav, NavItem, spanStyle } from "./styles"

const cvUrl = '../../../../public/assets/cv-sandra-petereau.pdf'

const Footer = () => {
  const navigate = useNavigate()
  
  return (
    <Container>
      <MaxWidthSection>
        <Logo onClick={() => navigate('/')} />
        <Nav>
          <NavItem>
            <Span style={spanStyle}>Mes projets</Span>
            <List>
              {projects.map((project) => (
                <li onClick={() => navigate(project.link)} key={project.id}>
                  {project.name}
                </li>
              ))}
            </List>
          </NavItem>

          <NavItem>
            <Span style={spanStyle}>Télécharger mon cv</Span>
            <DownloadLink href={cvUrl} download>
              <DownloadIcon />
              cv-sandra-petereau.pdf
            </DownloadLink>
          </NavItem>

          <NavItem>
            <Span style={spanStyle}>Me contacter</Span>
            <ContactIcons />
          </NavItem>
        </Nav>

        <P style={copyrightStyle}>© 2025 Sandra Petereau</P>
      </MaxWidthSection>
    </Container>
  )
}

export default Footer