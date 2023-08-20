import { IconButton } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function DarkModeToggle() {
  const isDarkMode = true;
  const toggleTheme = () => { console.log("Implement me") }

  return (
    <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
        {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  )
}

export default DarkModeToggle;
