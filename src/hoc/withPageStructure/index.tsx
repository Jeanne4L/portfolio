import { type ComponentType } from 'react'

import Header from '../../pages/parts/Header'
import { Main } from './styles'

const withPageStructure = (Component: ComponentType) => {
  return (props: any) => (
      <>
        <Header />
        <Main>
          <Component {...props} />
        </Main>
      </>
    )
}

export default withPageStructure