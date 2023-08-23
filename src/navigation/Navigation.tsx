import './Navigation.scss';
import { useEffect, useState } from 'react';
import { DESKTOP_WIDTH_PX } from '../constants';
import { IconButton, List } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SailingIcon from '@mui/icons-material/Sailing';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import { ROUTES } from '../constants';

interface NavigationItem {
  text: string;
  icon: JSX.Element;
  href: string;
}

export function Navigation() {
  const [expanded, setIsExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () =>
      setIsDesktop(window.innerWidth >= DESKTOP_WIDTH_PX);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  const toggleExpanded = () => setIsExpanded(!expanded);

  const menuItems: NavigationItem[] = [
    {
      text: 'Home',
      icon: <HomeIcon fontSize="large" color="primary" />,
      href: ROUTES.HOME,
    },
    {
      text: 'Pre-University Projects',
      icon: <VideogameAssetIcon fontSize="large" color="primary" />,
      href: ROUTES.PRE_UNIVERSITY_PROJECTS,
    },
    {
      text: 'Autonomous Robotic Vehicle Project (ARVP)',
      icon: <SailingIcon fontSize="large" color="primary" />,
      href: ROUTES.ARVP,
    },
  ];

  return (
    <div className="navigation">
      {!isDesktop && (
        <IconButton size="large" onClick={toggleExpanded}>
          <MenuIcon className="menu-button" fontSize="large" color="primary" />
        </IconButton>
      )}
      {(isDesktop || expanded) && (
        <div className="navigation-elements-container">
          <List>
            {menuItems.map((navigationItem, index) => (
              <ListItemButton
                key={index}
                component="a"
                href={navigationItem.href}
              >
                <ListItemIcon>{navigationItem.icon}</ListItemIcon>
                <ListItemText primary={navigationItem.text} />
              </ListItemButton>
            ))}
          </List>
        </div>
      )}
    </div>
  );
}
