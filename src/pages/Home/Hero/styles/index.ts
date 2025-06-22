import type { CSSProperties } from "react"
import newStyled from "@emotion/styled"

import { FontFamily } from "../../../../constants/fonts"
import { Margins } from "../../../../constants/margins"

export const Title = newStyled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`

export const rotatedH1Style: CSSProperties = {
  writingMode: 'sideways-lr',
  lineHeight: 0.75
}

export const h1SpanStyle: CSSProperties = {
  fontSize: 'clamp(1.5rem, 0.875rem + 3.125vw, 4rem)',
  display: 'inline-block',
  textTransform: 'uppercase',
  fontFamily: FontFamily.H1
}

export const Content = newStyled.div`
  margin-top: ${Margins.M7};
  display: flex;
  flex-direction: column;
  gap: ${Margins.M1};
`

export const contactStyle: CSSProperties = {
  marginTop: Margins.M4
}