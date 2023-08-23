import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Navigation } from './navigation/Navigation';
import { Layout } from './layout/Layout';
import { Header } from './header/Header';
import { useMemo, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { ColorMode, ColorModeContext } from './color-mode/color-mode-context';
import { Theme, createTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

export function CreateTheme(colorMode: ColorMode): Theme {
  return createTheme({
    palette: {
      mode: colorMode,
    },
  });
}

export function App() {
  const { t } = useTranslation();

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
            footer={<p>{t('COPYRIGHT')}</p>}
            body={<p>{t('PLACEHOLDER_TEXT')}</p>}
          />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
