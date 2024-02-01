import Header from './components/Header/Header.jsx';
import MainWrapper from './components/MainWrapper/MainWrapper'
import Footer from './components/Footer/Footer.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'

import {ThemeProvider} from 'styled-components'
import GlobalStyles from './components/styles/GlobalStyles.js'

const theme = {
  mainColor: '#67696e',
  secondaryColor: '#201b21',
  buttonHoverBg: 'rgba(32, 27, 33, .7)',
  footerBg: '#201b21',
  media: {
    desktop: '(min-width: 1116px)',
    tablet: '(min-width: 575px)',
  }
}

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <MainWrapper>
      <Header/>
      {/*<main>*/}
        <HomePage/>
      {/*</main>*/}
      <Footer/>
    </MainWrapper>
  </ThemeProvider>
)

export default App
