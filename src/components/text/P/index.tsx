import type { CSSProperties, ReactNode } from "react"

type PProps = {
  children: ReactNode
  style?: CSSProperties
}

const P = ({ children, style }: PProps) => {
  return (
    <p style={style}>{children}</p>
  )
}

export default P