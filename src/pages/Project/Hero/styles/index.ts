import newStyled from "@emotion/styled"

import { Margins } from "../../../../constants/margins"
import { Paddings } from "../../../../constants/paddings"
import { Breakpoints } from "../../../../constants/breakpoints"
import { Colors } from "../../../../constants/colors"
import { FontSizes } from "../../../../constants/fonts"

export const HeroContainer = newStyled.div`
  display: grid;
  grid-template-columns: 1fr;
    
  @media(min-width: ${Breakpoints.LAPTOP}) {
    display: flex;
    min-height: 100vh;
    align-items: stretch;
  }
`

export const Title = newStyled.div`
  display: flex;
  flex-direction: column;
  gap: ${Margins.M1};
  margin-bottom: ${Margins.M4};

  h1 {
    line-height: 0.9;
  }

  span {
    font-size: ${FontSizes.BUTTON};
  }
`

export const TagsContainer = newStyled.div`
  display: flex;
  align-items: center;
  gap: ${Margins.M1};
`

export const Content = newStyled.div`
  display: flex;
  flex-direction: column;
  gap: ${Margins.M4};
  grid-column: 1/3;
  padding: ${Paddings.P3};
  margin-top: 120px;

  @media(min-width: ${Breakpoints.LAPTOP}) {
    width: 50vw;
    justify-content: center;
    margin-top: 0;
  }
`

export const Description = newStyled.div`
  display: flex;
  flex-direction: column;
  gap: ${Margins.M2};
`

export const ButtonsContainer = newStyled.div`
  display: flex;
  gap: ${Margins.M2};
`

export const ImgContainer = newStyled.div`
  width: 100%;
  background-color: ${Colors.BLACK};
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    display: block;
    height: 70%;
    max-height: 450px;
    border-radius: 16px;
    border: solid 1px ${Colors.WHITE};
  }

  @media(min-width: ${Breakpoints.LAPTOP}) {
    width: 50vw;
    justify-content: center;
    flex: 1;

    img {
      max-height: 600px;
    }
  }
`