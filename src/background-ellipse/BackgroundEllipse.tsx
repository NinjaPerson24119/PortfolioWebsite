import { Box, useTheme } from '@mui/material';
import { useContext } from 'react';
import {
  ColorModeContext,
  ColorModeContextProps,
} from '../theme/color-mode-context';

interface BackgroundEllipseProps {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  diameter: string;
}

export function BackgroundEllipse({ ...props }: BackgroundEllipseProps) {
  const theme = useTheme();
  const color = theme.palette.secondary.main;
  const colorModeContext = useContext<ColorModeContextProps>(ColorModeContext);
  return (
    <>
      {colorModeContext.colorMode === 'dark' && (
        <Box
          sx={{
            zIndex: -2,
            position: 'fixed',
            top: props.top,
            left: props.left,
            bottom: props.bottom,
            right: props.right,
            borderRadius: '50%',
            width: props.diameter,
            height: props.diameter,
            background: `radial-gradient(circle closest-side, ${color}, transparent)`,
            filter: 'blur(60px)',
            overflow: 'hidden',
          }}
        ></Box>
      )}
    </>
  );
}
