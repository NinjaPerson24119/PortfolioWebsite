import { Grid, Box, useTheme, useMediaQuery } from '@mui/material';
import { ReactNode } from 'react';
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
        <Grid item xs={12} md={3}>
          <Box className={styles.stickyContainer}>{props.navigation}</Box>
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
      </Grid>
      <div className={styles.footerContainer}>{props.footer}</div>
    </div>
  );
}
