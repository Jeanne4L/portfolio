import type { ReactNode } from "react"

import { Container } from "./styles"

type MaxWidthSectionProps = {
  children: ReactNode
}

const MaxWidthSection = ({ children }: MaxWidthSectionProps) => {
  return (
    <Container>{children}</Container>
  )
}

export default MaxWidthSection