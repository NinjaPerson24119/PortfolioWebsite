import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  useTheme,
  Box,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { NavigationItems } from '../routing';
import { MediaQueryIsDesktop } from '../theme/Theme';
import { IconsBar } from './IconsBar';
import './Navigation.scss';

export function Navigation() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = !MediaQueryIsDesktop(theme);

  return (
    <Box className="navigation" sx={isMobile ? { bgcolor: '#00FF00' } : {}}>
      <IconsBar />
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
                  <p>TODO: Active Route</p>
                )}
              </ListItemButton>
            );
          })}
        </List>
      </div>
    </Box>
  );
}
