import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, List } from '@mui/material';
import { ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavigationItems } from '../routing';
import './Navigation.scss';

interface NavigationProps {
  collapsible: boolean;
}

export function Navigation(props: NavigationProps) {
  const [expanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!expanded);

  const location = useLocation();

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
            {NavigationItems.map((navigationItem, index) => {
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
