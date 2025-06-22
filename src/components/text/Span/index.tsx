import type { CSSProperties, ReactNode } from "react"

import { SpanContainer } from "./styles"

type SpanProps = {
  children: ReactNode
  colored?: boolean
  bold?: boolean
  style?: CSSProperties
}

const Span = ({ children, colored = false, bold = false, style }: SpanProps) => {
  return (
    <SpanContainer 
      colored={colored} 
      bold={bold} 
      style={style} 
    >
      {children}
    </SpanContainer>
  )
}

export default Span