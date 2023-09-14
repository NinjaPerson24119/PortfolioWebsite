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
  useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavigationItems } from '../routing';
import { IconsBar } from './IconsBar';
import styles from './Navigation.module.scss';

export function Navigation() {
  const location = useLocation();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
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
              if (!isMd) {
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
      sx={!isMd ? { bgcolor: theme.palette.primary.main } : {}}
    >
      <IconsBar toggleNavigation={() => setDrawerOpen(!drawerOpen)} />
      {!!isMd && (
        <div className={styles.navigationElementsContainer}>
          {navigationItems}
        </div>
      )}
      {!isMd && (
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
