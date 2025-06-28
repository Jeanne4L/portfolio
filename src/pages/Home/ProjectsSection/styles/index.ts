import newStyled from "@emotion/styled"

import { Breakpoints } from "../../../../constants/breakpoints"

export const Container = newStyled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media(min-width: ${Breakpoints.TABLET}) {
    grid-template-columns: 1fr 1fr;
  }
`