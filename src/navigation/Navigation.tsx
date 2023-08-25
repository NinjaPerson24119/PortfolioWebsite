import './Navigation.scss';
import React, { useState } from 'react';
import { IconButton, List } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SailingIcon from '@mui/icons-material/Sailing';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import { ROUTES } from '../constants';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface NavigationItem {
  text: string;
  icon: React.JSX.Element;
  href: string;
}

interface NavigationProps {
  collapsible: boolean;
}

export function Navigation(props: NavigationProps) {
  const { t } = useTranslation();

  const [expanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!expanded);

  const location = useLocation();

  const menuItems: NavigationItem[] = [
    {
      text: t('NAVIGATION.OVERVIEW'),
      icon: <HomeIcon fontSize="large" color="primary" />,
      href: ROUTES.OVERVIEW,
    },
    {
      text: t('NAVIGATION.PRE_UNIVERSITY_PROJECTS'),
      icon: <VideogameAssetIcon fontSize="large" color="primary" />,
      href: ROUTES.PRE_UNIVERSITY_PROJECTS,
    },
    {
      text: t('NAVIGATION.ARVP'),
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
                  to={navigationItem.href}
                  component={Link}
                >
                  <ListItemIcon>{navigationItem.icon}</ListItemIcon>
                  <ListItemText primary={navigationItem.text} />
                  {location.pathname === `/${navigationItem.href}` && (
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
