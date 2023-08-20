import './Navigation.css';
import { useEffect, useState } from "react";
import { DESKTOP_WIDTH_PX } from "../constants";
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SailingIcon from '@mui/icons-material/Sailing';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

function Navigation() {
  const [expanded, setIsExpanded] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= DESKTOP_WIDTH_PX);
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  const toggleExpanded = () => setIsExpanded(!expanded)

  return (
    <div className="navigation">
      {
        !isDesktop &&
        <IconButton size="large" onClick={toggleExpanded}>
          <MenuIcon className="menu-button" fontSize="large" color="primary" />
        </IconButton>
      }
      {
        (isDesktop || expanded) &&
        <div className="navigation-elements-container">
          <IconButton size="large">
            <HomeIcon fontSize="large" color="primary" />
            <a href="#Home">Home</a>
          </IconButton>
          <IconButton size="large">
            <VideogameAssetIcon fontSize="large" color="primary" />
            <a href="#PreUniversityProjects">Pre-University Projects</a>
          </IconButton>
          <IconButton size="large">
            <SailingIcon fontSize="large" color="primary" />
            <a href="#ARVP">ARVP</a>
          </IconButton>
        </div>
      }
    </div>
  )
}

export default Navigation;
