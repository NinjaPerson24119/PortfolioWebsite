import { Box, useTheme } from '@mui/material';

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
  return (
    <Box
      sx={{
        zIndex: -1,
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
  );
}
