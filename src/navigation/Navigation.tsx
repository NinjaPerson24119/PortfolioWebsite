import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  useTheme,
  Box,
  Typography,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { NavigationItems } from '../routing';
import { MediaQueryIsDesktop } from '../theme/Theme';
import { IconsBar } from './IconsBar';
import styles from './Navigation.module.scss';

export function Navigation() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = !MediaQueryIsDesktop(theme);

  return (
    <Box
      className={styles.navigation}
      sx={isMobile ? { bgcolor: '#00FF00' } : {}}
    >
      <IconsBar />
      <div className={styles.navigationElementsContainer}>
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
                  <Typography variant="body1">ACTIVE</Typography>
                )}
              </ListItemButton>
            );
          })}
        </List>
      </div>
    </Box>
  );
}
