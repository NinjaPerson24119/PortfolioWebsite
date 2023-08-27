import { useTheme } from '@mui/material';
import { ReactNode } from 'react';
import { MediaQueryIsDesktop } from '../theme/Theme';
import './Layout.scss';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  header: ReactNode;
  navigation: ReactNode;
  footer: ReactNode;
  content: ReactNode;
}

export function Layout({ ...props }: LayoutProps) {
  const theme = useTheme();

  const leftSidebarDesktop = (
    <div className="left-sidebar">
      <Sidebar header={props.header} navigation={props.navigation} />
    </div>
  );
  const headerMobile = (
    <div className="header-mobile">
      {props.navigation}
      {props.header}
    </div>
  );

  return (
    <div className="layout">
      {MediaQueryIsDesktop(theme) ? leftSidebarDesktop : headerMobile}
      <div className="content-container">
        <div className="content">{props.content}</div>
        <div className="footer-container">
          <div className="footer">{props.footer}</div>
        </div>
      </div>
    </div>
  );
}
