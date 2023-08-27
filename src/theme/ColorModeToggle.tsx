import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, ColorModeContextProps } from './color-mode-context';

export function ColorModeToggle() {
  const colorModeContext = useContext<ColorModeContextProps>(ColorModeContext);
  return (
    <IconButton onClick={colorModeContext.toggleColorMode}>
      {colorModeContext.colorMode === 'dark' ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
}
