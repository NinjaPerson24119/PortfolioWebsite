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
import styles from './Navigation.module.scss';

export function Navigation() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = !MediaQueryIsDesktop(theme);

  return (
    <Box
      className={styles.navigation}
      sx={isMobile ? { bgcolor: theme.palette.primary.main } : {}}
    >
      <IconsBar />
      {!isMobile && (
        <div className={styles.navigationElementsContainer}>
          <List>
            {NavigationItems.map((navigationItem, index) => {
              const routeActive =
                location.pathname === `/${navigationItem.href}`;
              return (
                <ListItemButton
                  key={index}
                  to={navigationItem.href}
                  component={Link}
                  sx={{
                    borderRight: routeActive
                      ? `2px solid ${theme.palette.text.link}`
                      : undefined,
                  }}
                >
                  <ListItemIcon>
                    <span style={{ color: theme.palette.text.link }}>
                      {navigationItem.icon}
                    </span>
                  </ListItemIcon>
                  <ListItemText primary={navigationItem.text} />
                </ListItemButton>
              );
            })}
          </List>
        </div>
      )}
    </Box>
  );
}
