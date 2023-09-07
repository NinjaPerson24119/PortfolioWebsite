import { Grid } from '@mui/material';
import { ReactNode } from 'react';
import styles from './Layout.module.scss';

interface LayoutProps {
  navigation: ReactNode;
  footer: ReactNode;
  content: ReactNode;
}

export function Layout({ ...props }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.gridContainer}>
        <Grid container direction="row-reverse">
          <Grid item xs={1} md={3}>
            {props.navigation}
          </Grid>
          <Grid item xs={1} md={6}>
            {props.content}
          </Grid>
          <Grid item md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
            {/*Spacer*/}
          </Grid>
        </Grid>
      </div>
      <div className={styles.footerContainer}>{props.footer}</div>
    </div>
  );
}
