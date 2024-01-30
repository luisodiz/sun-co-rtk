import Header from './components/Header/Header.jsx';
import HomePage from './pages/HomePage/HomePage.jsx'

import {ThemeProvider} from 'styled-components'
import GlobalStyles from './components/styles/GlobalStyles.js'

const theme = {
  mainColor: '#67696e',
  secondaryColor: '#201b21',
  buttonHoverBg: 'rgba(32, 27, 33, .9)'
}

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <Header/>
    <HomePage/>
  </ThemeProvider>
)

export default App
