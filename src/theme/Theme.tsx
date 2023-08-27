import { useMediaQuery, CssBaseline } from '@mui/material';
import {
  Theme as MUITheme,
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import { useMemo, useState } from 'react';
import { DESKTOP_WIDTH_PX } from '../constants';
import { ColorMode, ColorModeContext } from './color-mode-context';

export function createMUITheme(colorMode: ColorMode): MUITheme {
  return createTheme({
    palette: {
      mode: colorMode,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: DESKTOP_WIDTH_PX,
        lg: 1200,
        xl: 1536,
      },
    },
  });
}

export function MediaQueryIsDesktop(theme: MUITheme): boolean {
  return useMediaQuery(theme.breakpoints.up('md'));
}

export function Theme(props: React.PropsWithChildren<unknown>) {
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
  const theme = useMemo(() => createMUITheme(colorMode), [colorMode]);

  return (
    <>
      {/*https://github.com/mui/material-ui/blob/master/packages/mui-material/src/CssBaseline/CssBaseline.js*/}
      <CssBaseline />

      <ColorModeContext.Provider value={colorModeContext}>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
