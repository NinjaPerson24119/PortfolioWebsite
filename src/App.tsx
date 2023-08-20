import './App.css'
import { ThemeProvider } from '@mui/material/styles';
import Theme from './theme'
import Navigation from './navigation/Navigation'

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Navigation />
        <p className="copyright">Copyright © 2023 Nicholas Wengel. All rights reserved.</p>
      </ThemeProvider>
    </>
  )
}

export default App
