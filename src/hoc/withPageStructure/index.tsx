import { type ComponentType } from 'react'

import Header from '../../pages/parts/Header'
import Footer from '../../pages/parts/Footer'
import { Main } from './styles'

const withPageStructure = (Component: ComponentType) => {
  return (props: any) => (
      <>
        <Header />
        <Main>
          <Component {...props} />
        </Main>
        <Footer />
      </>
    )
}

export default withPageStructure