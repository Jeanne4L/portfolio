import newStyled from "@emotion/styled"

import { Paddings } from "../../../constants/paddings"
import { Colors } from "../../../constants/colors"
import { FontSizes, FontWeights } from "../../../constants/fonts"

export const Container = newStyled.div<{bgColor: string}>`
  padding: 4px ${Paddings.P2};
  border-radius: 24px;
  background-color: ${props => props.bgColor};
  border: solid 2px ${Colors.VIOLET};
  text-transform: uppercase;
  color: ${Colors.WHITE};
  font-weight: ${FontWeights.MEDIUM};
  font-size: ${FontSizes.SMALL_TEXT};
`