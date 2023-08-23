import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Navigation } from './navigation/Navigation';
import { Layout } from './layout/Layout';
import { Header } from './header/Header';
import { useMemo, useState, useEffect, ReactNode } from 'react';
import { useMediaQuery } from '@mui/material';
import { ColorMode, ColorModeContext } from './color-mode/color-mode-context';
import { Theme, createTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DESKTOP_WIDTH_PX, ROUTES } from './constants';

function createCustomTheme(colorMode: ColorMode): Theme {
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
  const theme = useMemo(() => createCustomTheme(colorMode), [colorMode]);

  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const handleResize = () =>
      setIsDesktop(window.innerWidth >= DESKTOP_WIDTH_PX);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  const layoutWithContent = (content: ReactNode) => (
    <Layout
      header={<Header />}
      navigation={<Navigation collapsible={!isDesktop} />}
      footer={<p>{t('COPYRIGHT')}</p>}
      content={content}
    />
  );

  const router = createBrowserRouter([
    {
      path: ROUTES.ROOT,
      element: layoutWithContent(<p>{t('PLACEHOLDER_TEXT')}</p>),
      errorElement: <p>404 Error</p>,
      children: [
        {
          path: ROUTES.SUBROUTES.PRE_UNIVERSITY_PROJECTS,
          element: layoutWithContent(<p>Pre-University</p>),
        },
        {
          path: ROUTES.SUBROUTES.ARVP,
          element: layoutWithContent(<p>ARVP</p>),
        },
      ],
    },
  ]);

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
