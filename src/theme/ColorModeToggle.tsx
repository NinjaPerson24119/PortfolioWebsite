import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, ColorModeContextProps } from './color-mode-context';

interface ColorModeToggleProps {
  className?: string;
}

export function ColorModeToggle(props: ColorModeToggleProps) {
  const colorModeContext = useContext<ColorModeContextProps>(ColorModeContext);
  return (
    <IconButton
      className={props.className}
      onClick={colorModeContext.toggleColorMode}
    >
      {colorModeContext.colorMode === 'dark' ? (
        <Brightness7Icon fontSize="large" color="primary" />
      ) : (
        <Brightness4Icon fontSize="large" color="primary" />
      )}
    </IconButton>
  );
}
