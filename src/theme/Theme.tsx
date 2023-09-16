import { useMediaQuery, CssBaseline } from '@mui/material';
import {
  Theme as MUITheme,
  createTheme,
  ThemeProvider,
  PaletteOptions,
} from '@mui/material/styles';
import { useMemo, useState } from 'react';
import { MD_WIDTH_PX } from '../constants';
import { ColorMode, ColorModeContext } from './color-mode-context';

const darkPalette: PaletteOptions = {
  primary: {
    main: '#242424',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#03A9F4',
    contrastText: '#ffffff',
  },
  tertiary: {
    main: '#FFFFFF',
  },
  background: {
    default: '#000000',
    paper: '#242424',
  },
  text: {
    primary: '#dddddd',
    link: '#ffffff',
  },
};

const lightPalette: PaletteOptions = {
  primary: {
    main: '#e8f8ff',
    contrastText: '#e5e5e5',
  },
  secondary: {
    main: '#000000',
  },
  tertiary: {
    main: '#000000',
  },
  background: {
    default: '#f7fdff',
    paper: '#e8f8ff',
  },
  text: {
    primary: '#212121',
    link: '#000000',
  },
};

export function createMUITheme(colorMode: ColorMode): MUITheme {
  return createTheme({
    palette: colorMode === 'dark' ? darkPalette : lightPalette,
    typography: {
      fontFamily: 'Roboto, Inter, system-ui, Helvetica, Arial, sans-serif',
      htmlFontSize: 16,
      fontSize: 14, // maps to 16px under MUI's equation with htmlFontSize = 16
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      button: {
        textTransform: 'none',
        fontWeight: 'bold',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: MD_WIDTH_PX,
        lg: 1200,
        xl: 1536,
      },
    },
  });
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
    t.typography.h1 = {
      fontSize: '3.25rem',
      [t.breakpoints.down('md')]: {
        fontSize: '2.5rem',
      },
    };
    (t.typography.subtitle1 = {
      fontSize: '2.25rem',
      [t.breakpoints.down('md')]: {
        fontSize: '1.75rem',
      },
    }),
      (t.typography.h2 = {
        fontSize: '2rem',
        [t.breakpoints.down('md')]: {
          fontSize: '1.5rem',
        },
      });
    t.typography.h3 = {
      fontSize: '1.5rem',
      [t.breakpoints.down('md')]: {
        fontSize: '1.25rem',
      },
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
