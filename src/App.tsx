import './App.css'
import { ThemeProvider } from '@mui/material/styles';
import Theme from './theme'
import Navigation from './navigation/Navigation'
import Layout from './layout/Layout';
import Header from './header/Header';

function App() {
  const copyright = <p className="copyright">Copyright © 2023 Nicholas Wengel. All rights reserved.</p>
  const dummyBodyText = <p>Some text for a document</p>
  return (
    <ThemeProvider theme={Theme}>
      <Layout
        header={<Header />}
        navigation={<Navigation />}
        footer={copyright}
        body={dummyBodyText} />
    </ThemeProvider>
  )
}

export default App
