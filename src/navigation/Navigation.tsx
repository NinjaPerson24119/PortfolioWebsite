import CloseIcon from '@mui/icons-material/Close';
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  useTheme,
  Box,
  Drawer,
  IconButton,
} from '@mui/material';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavigationItems } from '../routing';
import { MediaQueryIsDesktop } from '../theme/Theme';
import { IconsBar } from './IconsBar';
import styles from './Navigation.module.scss';

export function Navigation() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = !MediaQueryIsDesktop(theme);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navigationItems = (
    <List>
      {NavigationItems.map((navigationItem, index) => {
        const routeActive = location.pathname === `/${navigationItem.href}`;
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
            onClick={() => {
              if (isMobile) {
                setDrawerOpen(false);
              }
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
  );

  return (
    <Box
      className={styles.navigation}
      sx={isMobile ? { bgcolor: theme.palette.primary.main } : {}}
    >
      <IconsBar toggleNavigation={() => setDrawerOpen(!drawerOpen)} />
      {!isMobile && (
        <div className={styles.navigationElementsContainer}>
          {navigationItems}
        </div>
      )}
      {isMobile && (
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          color="primary"
          PaperProps={{
            sx: {
              backgroundColor: theme.palette.primary.main,
            },
          }}
        >
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{ justifyContent: 'right' }}
          >
            <CloseIcon
              sx={{ color: theme.palette.text.link }}
              fontSize="large"
            />
          </IconButton>
          {navigationItems}
        </Drawer>
      )}
    </Box>
  );
}
