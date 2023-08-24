import './Navigation.scss';
import React, { useState } from 'react';
import { IconButton, List } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SailingIcon from '@mui/icons-material/Sailing';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import { ROUTES } from '../constants';
import { NavLink, NavLinkProps, useLocation } from 'react-router-dom';

interface NavigationItem {
  text: string;
  icon: React.JSX.Element;
  href: string;
}

interface NavigationProps {
  collapsible: boolean;
}

const CustomNavLink = React.forwardRef<
  HTMLAnchorElement,
  Omit<NavLinkProps, 'to'> & { href: NavLinkProps['to'] }
>(function CustomNavLink(props, ref) {
  const { href, className, ...other } = props;
  return (
    <NavLink
      ref={ref}
      to={href}
      className={({ isActive }) =>
        `${className as string} ${isActive ? 'navigation-item-active' : ''}`
      }
      {...other}
    />
  );
});

export function Navigation(props: NavigationProps) {
  const [expanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!expanded);

  const location = useLocation();

  const menuItems: NavigationItem[] = [
    {
      text: 'Overview',
      icon: <HomeIcon fontSize="large" color="primary" />,
      href: ROUTES.OVERVIEW,
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
      {props.collapsible && (
        <IconButton size="large" onClick={toggleExpanded}>
          <MenuIcon className="menu-button" fontSize="large" color="primary" />
        </IconButton>
      )}
      {(!props.collapsible || expanded) && (
        <div className="navigation-elements-container">
          <List>
            {menuItems.map((navigationItem, index) => {
              return (
                <ListItemButton
                  key={index}
                  href={navigationItem.href}
                  component={CustomNavLink}
                >
                  <ListItemIcon>{navigationItem.icon}</ListItemIcon>
                  <ListItemText primary={navigationItem.text} />
                  {location.pathname.includes(navigationItem.href) && (
                    <p>Active Route</p>
                  )}
                </ListItemButton>
              );
            })}
          </List>
        </div>
      )}
    </div>
  );
}
