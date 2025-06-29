import newStyled from "@emotion/styled"
import { Link } from "react-router"

import { Colors } from "../../../constants/colors"
import { Paddings } from "../../../constants/paddings"
import { Margins } from "../../../constants/margins"
import { FontSizes, FontWeights } from "../../../constants/fonts"

export const Container = newStyled(Link)<{variant: 'primary' | 'secondary'}>`
  background-color: ${props => props.variant === 'primary' ? Colors.VIOLET : 'transparent'};
  border: solid 2px ${Colors.VIOLET};
  color: ${props => props.variant === 'primary' ? Colors.WHITE : Colors.VIOLET};
  padding: ${Paddings.P1} ${Paddings.P2};
  display: flex;
  gap: ${Margins.M1};
  align-items: center;
  border-radius: 4px;
  font-size: ${FontSizes.BUTTON};
  font-weight: ${FontWeights.MEDIUM};
`