import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypeText {
    link: string;
  }
  interface Palette {
    tertiary: Palette['primary'];
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
  }
}
