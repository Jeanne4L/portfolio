import type { ReactNode } from "react"

import { Title } from "./styles"

type H2Props = {
  children: ReactNode
}

const H2 = ({ children }: H2Props) => {
  return (
    <Title>{children}</Title>
  )
}

export default H2