import { Colors } from "../../constants/colors"
import ArrowIcon from "../icons/Arrow"
import { Container } from "./styles"

type ButtonProps = {
  label: string
  variant: 'primary' | 'secondary'
  link: string
  isExternLink?: boolean
}

const Button = ({ label, variant = 'primary', link, isExternLink = false }: ButtonProps) => {
  return (
    <Container variant={variant} href={link} target={isExternLink ? "_blank" : "_self"}>
      {label}
      <ArrowIcon color={variant === 'primary' ? Colors.WHITE : Colors.VIOLET} />
    </Container>
  )
}

export default Button