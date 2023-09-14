import { Grid, Box, useTheme } from '@mui/material';
import { ReactNode } from 'react';
import { MediaQueryIsDesktop } from '../theme/Theme';
import styles from './Layout.module.scss';

interface LayoutProps {
  navigation: ReactNode;
  footer: ReactNode;
  content: ReactNode;
}

export function Layout({ ...props }: LayoutProps) {
  const theme = useTheme();
  const isDesktop = MediaQueryIsDesktop(theme);
  return (
    <div className={styles.layout}>
      <Grid
        container
        direction="row-reverse"
        justifyContent="flex-start"
        sx={{ flexGrow: 1 }}
      >
        <Grid item xs={12} md={3}>
          <Box className={styles.stickyContainer}>{props.navigation}</Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={
            isDesktop
              ? { display: 'flex', justifyContent: 'center' }
              : undefined
          }
        >
          <Box sx={{ maxWidth: isDesktop ? '680px' : undefined }}>
            {props.content}
          </Box>
        </Grid>
      </Grid>
      <div className={styles.footerContainer}>{props.footer}</div>
    </div>
  );
}
