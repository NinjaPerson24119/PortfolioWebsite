import { Theme, createTheme } from '@mui/material/styles';
import { ColorMode } from './color-mode-context';

export function CreateTheme(colorMode: ColorMode): Theme {
  return createTheme({
    palette: {
      mode: colorMode,
    },
  });
}
