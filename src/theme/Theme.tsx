import { useMediaQuery, CssBaseline } from '@mui/material';
import {
  Theme as MUITheme,
  createTheme,
  ThemeProvider,
  PaletteOptions,
} from '@mui/material/styles';
import { useMemo, useState } from 'react';
import { DESKTOP_WIDTH_PX } from '../constants';
import { ColorMode, ColorModeContext } from './color-mode-context';

const darkPalette: PaletteOptions = {
  primary: {
    light: '#676767',
    main: '#363636',
    dark: '#161616',
    contrastText: '#ffffff',
  },
  secondary: {
    light: '#b9c5ea',
    main: '#03A9F4',
    dark: '#567ccc',
    contrastText: '#ffffff',
  },
  background: {
    default: '#000000',
    paper: '#363636',
  },
  text: {
    primary: '#dddddd',
    link: '#ffffff',
  },
};

const lightPalette: PaletteOptions = {
  primary: {
    light: '#676767',
    main: '#363636',
    dark: '#161616',
    contrastText: '#e5e5e5',
  },
  secondary: {
    light: '#b9c5ea',
    main: '#89a1dc',
    dark: '#567ccc',
    contrastText: '#0040aa',
  },
  background: {
    default: '#ffffff',
  },
  text: {
    primary: '#000000',
    link: '#000000',
  },
};

export function createMUITheme(colorMode: ColorMode): MUITheme {
  return createTheme({
    palette: colorMode === 'dark' ? darkPalette : lightPalette,
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
  const theme = useMemo(() => {
    const t = createMUITheme(colorMode);
    t.typography.htmlFontSize = 16;
    t.typography.h1 = {
      fontSize: '3rem',
      [t.breakpoints.down('md')]: {
        fontSize: '2.25rem',
      },
    };
    t.typography.h2 = {
      fontSize: '1.25rem',
      [t.breakpoints.down('md')]: {
        fontSize: '1.125rem',
      },
    };
    t.typography.h3 = {
      fontSize: '1rem',
    };
    return t;
  }, [colorMode]);

  return (
    <>
      <ColorModeContext.Provider value={colorModeContext}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {props.children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
