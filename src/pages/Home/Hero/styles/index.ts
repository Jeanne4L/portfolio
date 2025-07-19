import type { CSSProperties } from "react"
import newStyled from "@emotion/styled"

import { FontFamily } from "../../../../constants/fonts"
import { Margins } from "../../../../constants/margins"
import { Paddings } from "../../../../constants/paddings"
import { Breakpoints } from "../../../../constants/breakpoints"
import { Colors } from "../../../../constants/colors"

export const HeroContainer = newStyled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  position: relative;

  @media(min-width: ${Breakpoints.MOBILE}) {
    grid-template-columns: 1fr 1fr;
  }

  @media(min-width: ${Breakpoints.LAPTOP}) {
    min-height: 100vh
  }
`

export const Title = newStyled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  padding: ${Paddings.P3};
`

export const rotatedH1Style: CSSProperties = {
  writingMode: 'sideways-lr',
  lineHeight: 0.75
}

export const h1SpanStyle: CSSProperties = {
  fontSize: 'clamp(1.5rem, 0.875rem + 3.125vw, 4rem)',
  display: 'inline-block',
  textTransform: 'uppercase',
  fontFamily: FontFamily.H1,
  lineHeight: 'normal'
}

export const Content = newStyled.div`
  margin-top: ${Margins.M7};
  display: flex;
  flex-direction: column;
  gap: ${Margins.M1};
  grid-column: 1/3;
  padding: ${Paddings.P3};

  @media(min-width: ${Breakpoints.LAPTOP}) {
    margin-top: 0;
    grid-column: 1 / 2;
  }
`

export const contactStyle: CSSProperties = {
  marginTop: Margins.M4
}

export const ImgContainer = newStyled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: ${Colors.BLACK};
  display: block;

  @media(min-width: ${Breakpoints.LAPTOP}) {
    grid-row: 1 / 3;
    grid-column: 2 / 3;
    height: 100vh;
  }
`

export const ProfileImg = newStyled.img`
  width: 100%;
  min-width: 196px;
  max-width: max-content;
  height: 100%;
  object-fit: cover;
  min-height: 254px;
`