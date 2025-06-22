import type { CSSProperties, ReactNode } from "react"

import { Title } from "./styles"

type H1Props = {
  children: ReactNode
  style?: CSSProperties
}

const H1 = ({ style, children }: H1Props) => {
  return (
    <Title style={style}>{children}</Title>
  )
}

export default H1