import { Colors } from "../../constants/colors"
import ArrowIcon from "../icons/Arrow"
import { Container } from "./styles"

type ButtonProps = {
  label: string
  variant: 'primary' | 'secondary'
  link: string
}

const Button = ({ label, variant = 'primary', link }: ButtonProps) => {
  return (
    <Container variant={variant} to={link}>
      {label}
      <ArrowIcon color={variant === 'primary' ? Colors.WHITE : Colors.VIOLET} />
    </Container>
  )
}

export default Button