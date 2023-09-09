import { Grid, Box } from '@mui/material';
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
        <Grid container direction="row-reverse" justifyContent="flex-start">
          <Grid item xs={12} md={3}>
            {props.navigation}
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ margin: '16px' }}>{props.content}</Box>
          </Grid>
        </Grid>
      </div>
      <div className={styles.footerContainer}>{props.footer}</div>
    </div>
  );
}
