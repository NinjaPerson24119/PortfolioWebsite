import { IconButton } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useContext } from "react";
import { ColorModeContext, ColorModeContextProps } from "./color-mode-context";

function ColorModeToggle() {
  const colorModeContext = useContext<ColorModeContextProps>(ColorModeContext);
  return (
    <IconButton onClick={colorModeContext.toggleColorMode}>
        {colorModeContext.colorMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  )
}

export default ColorModeToggle;
