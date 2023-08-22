import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Navigation } from './navigation/Navigation';
import { Layout } from './layout/Layout';
import { Header } from './header/Header';
import { useMemo, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { ColorMode, ColorModeContext } from './color-mode/color-mode-context';
import { Theme, createTheme } from '@mui/material/styles';

export function CreateTheme(colorMode: ColorMode): Theme {
  return createTheme({
    palette: {
      mode: colorMode,
    },
  });
}

export function App() {
  const copyright = (
    <p className="copyright">
      Copyright © 2023 Nicholas Wengel. All rights reserved.
    </p>
  );
  const dummyBodyText = <p>Some text for a document</p>;

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [colorMode, setColorMode] = useState<ColorMode>(
    prefersDarkMode ? 'dark' : 'light',
  );
  const colorModeContext = useMemo(
    () => ({
      colorMode: colorMode,
      toggleColorMode: () =>
        setColorMode(colorMode === 'dark' ? 'light' : 'dark'),
    }),
    [colorMode],
  );
  const theme = useMemo(() => CreateTheme(colorMode), [colorMode]);

  return (
    <>
      {/*https://github.com/mui/material-ui/blob/master/packages/mui-material/src/CssBaseline/CssBaseline.js*/}
      <CssBaseline />

      <ColorModeContext.Provider value={colorModeContext}>
        <ThemeProvider theme={theme}>
          <Layout
            header={<Header />}
            navigation={<Navigation />}
            footer={copyright}
            body={dummyBodyText}
          />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
