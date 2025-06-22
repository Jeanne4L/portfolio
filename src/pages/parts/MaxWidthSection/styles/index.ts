import newStyled from "@emotion/styled"

import { Breakpoints } from "../../../../constants/breakpoints"
import { Paddings } from "../../../../constants/paddings"

export const Container = newStyled.div`
  max-width: ${Breakpoints.MAX_WIDTH};
  margin: 0 auto;
  padding: ${Paddings.P3};
`