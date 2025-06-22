import EmailIcon from "../components/icons/socials/Email"
import GithubIcon from "../components/icons/socials/Github"
import LinkedinIcon from "../components/icons/socials/Linkedin"
import { Links } from "../constants/links"

export const contactLinks = [
  {
    name: 'email',
    link: `mailto:${Links.EMAIL}`,
    icon: <EmailIcon width='24px' height='24px' />
  },
  {
    name: 'github',
    link: Links.GITHUB,
    icon: <GithubIcon width='28px' height='24px' />
  },
  {
    name: 'linkedin',
    link: Links.LINKEDIN,
    icon: <LinkedinIcon width='24px' height='24px' />
  }
]