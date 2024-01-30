import {WrapperStyled} from './components/styles/Wrapper.styled.js'
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'

import {ThemeProvider} from 'styled-components'
import GlobalStyles from './components/styles/GlobalStyles.js'

const theme = {
  mainColor: '#67696e',
  secondaryColor: '#201b21',
  buttonHoverBg: 'rgba(32, 27, 33, .7)',
  footerBg: '#201b21'
}

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <WrapperStyled>
      <Header/>
      <HomePage/>
      <Footer/>
    </WrapperStyled>
  </ThemeProvider>
)

export default App
