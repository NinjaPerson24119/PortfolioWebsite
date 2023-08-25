import { useMediaQuery } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Theme, createTheme } from '@mui/material/styles';
import { useMemo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';
import { ColorMode, ColorModeContext } from './color-mode/color-mode-context';
import { DESKTOP_WIDTH_PX } from './constants';
import { Header } from './header/Header';
import { Layout } from './layout/Layout';
import { Navigation } from './navigation/Navigation';
import { GenerateRouter } from './routing';

function createCustomTheme(colorMode: ColorMode): Theme {
  return createTheme({
    palette: {
      mode: colorMode,
    },
  });
}

export const ROUTES = {
  OVERVIEW: 'overview',
  PRE_UNIVERSITY_PROJECTS: 'pre-university-projects',
  ARVP: 'arvp',
};

export function App() {
  const { t } = useTranslation();

  // theming
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
  const theme = useMemo(() => createCustomTheme(colorMode), [colorMode]);

  // routing
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const handleResize = () =>
      setIsDesktop(window.innerWidth >= DESKTOP_WIDTH_PX);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  const layout = (
    <Layout
      header={<Header />}
      navigation={<Navigation collapsible={!isDesktop} />}
      footer={<p>{t('COPYRIGHT')}</p>}
    />
  );
  const router = useMemo(() => GenerateRouter(layout), [layout]);

  return (
    <>
      {/*https://github.com/mui/material-ui/blob/master/packages/mui-material/src/CssBaseline/CssBaseline.js*/}
      <CssBaseline />

      <ColorModeContext.Provider value={colorModeContext}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
