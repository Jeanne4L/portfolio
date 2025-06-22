import newStyled from "@emotion/styled"

import { Colors } from "../../../constants/colors"

export const Container = newStyled.div`
  width: 34px;
  height: 34px;
  border-radius: 4px;
  background-color: ${Colors.BLACK};
  border: solid 2px ${Colors.VIOLET};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.VIOLET};
    border-colro: ${Colors.BLACK};
  }
`