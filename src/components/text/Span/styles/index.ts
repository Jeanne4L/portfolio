import newStyled from "@emotion/styled"

import { Colors } from "../../../../constants/colors"
import { FontWeights } from "../../../../constants/fonts"

export const SpanContainer = newStyled.span<{colored: boolean, bold: boolean}>`
  color: ${props => props.colored && Colors.VIOLET};
  font-weight: ${props => props.bold ? FontWeights.BOLD : FontWeights.REGULAR};
`