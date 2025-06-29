import newStyled from "@emotion/styled"
import { keyframes } from "@emotion/react"

import { Colors } from "../../../constants/colors"
import { Breakpoints } from "../../../constants/breakpoints"

const scroll = keyframes`
  0% {
    transform: translateY(-25%)
  }
  100% {
    transform: translateY(25%)
  }
`

export const Container = newStyled.div`
  display: none;

  @media(min-width: ${Breakpoints.LAPTOP}) {
    width: 140px;
    height: 140px;
    border-radius: 500px;
    background-color: rgba(117, 23, 243, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const AnimatedContent = newStyled.div`
  width: 56px;
  height: 56px;
  border-radius: 500px;
  background-color: ${Colors.VIOLET};
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  animation: ${scroll} 1.2s infinite;
`