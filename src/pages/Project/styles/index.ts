import newStyled from "@emotion/styled"

import { Breakpoints } from "../../../constants/breakpoints"
import { Colors } from "../../../constants/colors"

export const ProjectImages = newStyled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: ${Breakpoints.TABLET}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const ImgContainer = newStyled.div<{isDesktop: boolean, isBlackBg: boolean}>`
  background-color: ${props => props.isBlackBg ? Colors.BLACK : Colors.WHITE};
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  
  img {
    display: block;
    width: ${props => props.isDesktop ? '90%' : 'auto'};
    height:  ${props => props.isDesktop ? 'auto' : '90%'};
    max-height: max-content;
    max-width: max-content;
    border-radius: 16px;
    border: solid 1px ${props => props.isBlackBg ? Colors.WHITE : Colors.BLACK};
  }

  @media(min-width: ${Breakpoints.TABLET}) {
    width: 50%;
  }

  @media(min-width: ${Breakpoints.LAPTOP}) {
    img {
      width: ${props => props.isDesktop ? '70%' : 'auto'};
      height:  ${props => props.isDesktop ? 'auto' : '70%'};
    }
  }
`