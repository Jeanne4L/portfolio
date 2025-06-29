import newStyled from "@emotion/styled"

import { Colors } from "../../../constants/colors"
import { Margins } from "../../../constants/margins"
import { Paddings } from "../../../constants/paddings"
import { FontWeights } from "../../../constants/fonts"

export const Container = newStyled.div`
  width: 36px;
  height: 36px;
  border-radius: 4px;
  background-color: ${Colors.BLACK};
  border: solid 2px ${Colors.VIOLET};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: width 300ms;
  overflow: hidden;

  svg {
    overflow: visible;
  }

  span {
    display: none;
    color: ${Colors.WHITE};
    text-transform: uppercase;
    font-weight: ${FontWeights.MEDIUM};
  }

  &:hover {
    width: 105px;
    padding: 0 ${Paddings.P2};
    gap: ${Margins.M1};

    svg {
      display: none;
    }

    span {
      display: block;
    }
  }
`