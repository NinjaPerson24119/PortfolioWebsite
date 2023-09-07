import Grid from '@mui/material/Unstable_Grid2';
import { ReactNode } from 'react';
import './Layout.scss';

interface LayoutProps {
  navigation: ReactNode;
  footer: ReactNode;
  content: ReactNode;
}

export function Layout({ ...props }: LayoutProps) {
  return (
    <div className="layout">
      <div className="grid-container">
        <Grid container>
          <Grid xs={3} md={3}>
            {props.navigation}
          </Grid>
          <Grid xs={6} md={6}>
            {props.content}
          </Grid>
          <Grid md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
            {/*Spacer*/}
          </Grid>
        </Grid>
      </div>
      <div className="footer">{props.footer}</div>
    </div>
  );
}
