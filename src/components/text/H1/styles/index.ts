import newStyled from "@emotion/styled"

import { FontFamily, FontSizes } from "../../../../constants/fonts"

export const Title = newStyled.h1`
  font-family: ${FontFamily.H1};
  font-size: ${FontSizes.H1};
  line-height: normal;
  text-transform: uppercase;
`