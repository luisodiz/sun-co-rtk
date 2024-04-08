import type { DefaultTheme } from 'styled-components'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'components/styles/GlobalStyles'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const theme: DefaultTheme = {
  mainColor: '#67696e',
  secondaryColor: '#201b21',
  buttonHoverBg: 'rgba(32, 27, 33, .7)',
  footerBg: '#201b21',
  media: {
    desktop: '(min-width: 1116px)',
    tablet: '(min-width: 575px)',
  },
}

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </ThemeProvider>
)

export default Root
