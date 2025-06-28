import newStyled from "@emotion/styled"

import { Colors } from "../../../constants/colors"

export const Container = newStyled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
`

export const Pixel = newStyled.div<{isWhite: boolean}>`
  width: 100%;
  height: 100%;
  background-color: ${props => props.isWhite ? Colors.WHITE : 'transparent'};
`