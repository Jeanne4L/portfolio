import newStyled from "@emotion/styled"

import { Colors } from "../../../constants/colors"
import { Margins } from "../../../constants/margins"
import { Paddings } from "../../../constants/paddings"
import { FontSizes, FontWeights } from "../../../constants/fonts"
import { Breakpoints } from "../../../constants/breakpoints"

export const Container = newStyled.div`
  aspect-ratio: 1/1;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  
  & > img {
    height: 100%;
  }

  @media(min-width: ${Breakpoints.LAPTOP}) {
    & > img {
      height: 100%;
      filter: grayscale(100%);
      transition: transform 800ms;
    }
      
    &:hover > img {
      filter: none;
      transform: scale(1.03);
    }
  }
`

export const NameContainer = newStyled.div`
  background-color: ${Colors.BLACK};
  border: solid 4px ${Colors.VIOLET};
  border-radius: 500px;
  color: ${Colors.WHITE};
  text-transform: uppercase;
  width: 175px;
  height: 175px;
  padding: ${Paddings.P2};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: ${FontWeights.MEDIUM};
  font-size: ${FontSizes.BUTTON};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const TagsContainer = newStyled.div`
  display: flex;
  align-items: center;
  gap: ${Margins.M1};
  position: absolute;
  bottom: 8px;
  left: 8px;

  @media(min-width: ${Breakpoints.TABLET}) {
    bottom: 24px;
    left: 24px;
  }
`