import './Navigation.scss';
import { useState } from 'react';
import { IconButton, List } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SailingIcon from '@mui/icons-material/Sailing';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import { ROUTES } from '../constants';

interface NavigationItem {
  text: string;
  icon: React.JSX.Element;
  href: string;
}

interface NavigationProps {
  collapsible: boolean;
}

export function Navigation(props: NavigationProps) {
  const [expanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!expanded);

  const menuItems: NavigationItem[] = [
    {
      text: 'Home',
      icon: <HomeIcon fontSize="large" color="primary" />,
      href: ROUTES.ROOT,
    },
    {
      text: 'Pre-University Projects',
      icon: <VideogameAssetIcon fontSize="large" color="primary" />,
      href: ROUTES.SUBROUTES.PRE_UNIVERSITY_PROJECTS,
    },
    {
      text: 'Autonomous Robotic Vehicle Project (ARVP)',
      icon: <SailingIcon fontSize="large" color="primary" />,
      href: ROUTES.SUBROUTES.ARVP,
    },
  ];

  return (
    <div className="navigation">
      {props.collapsible && (
        <IconButton size="large" onClick={toggleExpanded}>
          <MenuIcon className="menu-button" fontSize="large" color="primary" />
        </IconButton>
      )}
      {(!props.collapsible || expanded) && (
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
