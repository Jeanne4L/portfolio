import newStyled from "@emotion/styled"

export const Svg = newStyled.svg`
  cursor: pointer;
  transition: transform 450ms;

  &:hover {
    transform: rotate(90deg);
  }
`