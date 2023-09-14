import { Grid, Box, useTheme, useMediaQuery } from '@mui/material';
import { ReactNode } from 'react';
import { BubblesOverlay } from '../BubblesOverlay';
import styles from './Layout.module.scss';

interface LayoutProps {
  navigation: ReactNode;
  footer: ReactNode;
  content: ReactNode;
}

export function Layout({ ...props }: LayoutProps) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <div className={styles.layout}>
      <Grid
        container
        direction="row-reverse"
        justifyContent="flex-start"
        sx={{ flexGrow: 1 }}
      >
        <Grid
          item
          xs={12}
          md={3}
          sx={
            isMd
              ? { position: 'relative', width: '100%', height: '100%' }
              : undefined
          }
        >
          <Box className={styles.stickyContainer}>{props.navigation}</Box>
          {isMd && <BubblesOverlay />}
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={isMd ? { display: 'flex', justifyContent: 'center' } : undefined}
        >
          <Box sx={{ maxWidth: isMd ? '680px' : undefined }}>
            {props.content}
          </Box>
        </Grid>
        <Grid item md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
          {isMd && (
            <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
              <BubblesOverlay />
            </Box>
          )}
        </Grid>
      </Grid>
      <div className={styles.footerContainer}>{props.footer}</div>
    </div>
  );
}
