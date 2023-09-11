import { Switch, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useContext } from 'react';
import darkSVG from '../assets/images/dark-mode.svg';
import lightSVG from '../assets/images/light-mode.svg';
import { ColorModeContext, ColorModeContextProps } from './color-mode-context';

// adapted from https://mui.com/material-ui/react-switch/#customization
// these same styles are horribly broken if used in sx prop (when they should be the same)
// couldn't tell ya why :shrug:
const StyledSwitch = styled(Switch)(() => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(3px)',
    '&.Mui-checked': {
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url(${darkSVG});`,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 32,
    height: 32,
    '&:before': {
      // eslint-disable-next-line
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url(${lightSVG});`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    borderRadius: 10,
  },
}));

export function ColorModeToggle() {
  const colorModeContext = useContext<ColorModeContextProps>(ColorModeContext);
  return (
    <Box sx={{ display: 'inline-flex' }}>
      <StyledSwitch
        color="secondary"
        defaultChecked
        onClick={colorModeContext.toggleColorMode}
        value={colorModeContext.colorMode === 'dark'}
      />
    </Box>
  );
}

/*
sx={{
          width: 44,
          height: 20,
          padding: 0,
          '& .MuiSwitch-switchBase': {
            margin: 0,
            padding: 0,
            transform: 'translateX(-20px)',
            '&.Mui-checked': {
              transform: 'translateX(22px)',
              '& .MuiSwitch-thumb:before': {
                backgroundImage: `url(${darkSVG});`,
              },
            },
            '& + .MuiSwitch-track': {
              //opacity: 1, // more opaque track
            },
          },
          '& .MuiSwitch-thumb': {
            width: 32,
            height: 32,
            '&:before': {
              // eslint-disable-next-line
              content: "''",
              position: 'absolute',
              width: '100%',
              height: '100%',
              left: 0,
              top: 0,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundImage: `url(${lightSVG});`,
            },
          },
          '& .MuiSwitch-track': {
            opacity: 1,
            borderRadius: 10,
          },
        }}
        */
