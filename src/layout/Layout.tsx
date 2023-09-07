import { Grid } from '@mui/material';
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
          <Grid item xs={3} md={3}>
            {props.navigation}
          </Grid>
          <Grid item xs={6} md={6}>
            {props.content}
          </Grid>
          <Grid item md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
            {/*Spacer*/}
          </Grid>
        </Grid>
      </div>
      <div className="footer">{props.footer}</div>
    </div>
  );
}
