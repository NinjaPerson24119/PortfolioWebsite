import { Grid, useTheme } from '@mui/material';
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
  const isMobile = !MediaQueryIsDesktop(theme);
  return (
    <div className={styles.layout}>
      <div className={styles.gridContainer}>
        <Grid container>
          <Grid item md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
            {/*Spacer*/}
          </Grid>
          <Grid item xs={1} md={6}>
            {props.content}
          </Grid>
          <Grid item xs={1} md={3} sx={{ order: isMobile ? 0 : undefined }}>
            {props.navigation}
          </Grid>
        </Grid>
      </div>
      <div className={styles.footerContainer}>{props.footer}</div>
    </div>
  );
}
