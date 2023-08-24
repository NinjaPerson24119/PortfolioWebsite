import './Layout.scss';
import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  header: ReactNode;
  navigation: ReactNode;
  footer: ReactNode;
}

export function Layout({ header, navigation, footer }: LayoutProps) {
  return (
    <div className="layout">
      <div className="sidebar">
        <div className="header">{header}</div>
        <div className="navigation">{navigation}</div>
      </div>
      <div className="content-container">
        <div className="content">
          <Outlet />
        </div>
        <div className="footer">{footer}</div>
      </div>
    </div>
  );
}
