import newStyled from "@emotion/styled"

import { Paddings } from "../../../../constants/paddings"

export const Container = newStyled.header`
  padding: ${Paddings.P3};
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 200;
  mix-blend-mode: difference;
`