import type { CSSProperties } from "react"
import newStyled from "@emotion/styled"

import { Colors } from "../../../../constants/colors"
import { Margins } from "../../../../constants/margins"
import { FontSizes, FontWeights } from "../../../../constants/fonts"
import { Breakpoints } from "../../../../constants/breakpoints"

export const Container = newStyled.footer`
  background-color: ${Colors.VIOLET};

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${Margins.M5};
    max-width: 1200px;
    padding-top: ${Margins.M5};
    padding-bottom: ${Margins.M5};
  }
`

export const Nav = newStyled.nav`
  display: flex;
  flex-direction: column;
  gap: ${Margins.M5};
  width: 100%;

  @media(min-width: ${Breakpoints.TABLET}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const NavItem = newStyled.div`
  display: flex;
  flex-direction: column;
  gap: ${Margins.M1};
  color: ${Colors.WHITE};

  @media(min-width: ${Breakpoints.TABLET}) {
    min-width: 195px;
  }
`

export const List = newStyled.ul`
  li {
    cursor: pointer;
  }

  li:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-color: rgba(255, 255, 255, 0.5);
  }
`

export const DownloadLink = newStyled.a`
  display: flex;
  gap: ${Margins.M2};
  align-items: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-color: rgba(255, 255, 255, 0.5);
  }
`

export const spanStyle: CSSProperties = {
  color: 'rgba(255, 255, 255, 0.5)',
  textTransform: 'uppercase',
  fontWeight: FontWeights.MEDIUM,
  fontSize: FontSizes.SMALL_TEXT
}

export const copyrightStyle: CSSProperties = {
  color: Colors.WHITE,
  width: '100%',
  fontSize: FontSizes.SMALL_TEXT
}