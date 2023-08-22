import './Layout.scss';
import { ReactNode } from 'react';

interface LayoutProps {
  header: ReactNode;
  navigation: ReactNode;
  footer: ReactNode;
  body: ReactNode;
}

export function Layout({ header, navigation, footer, body }: LayoutProps) {
  return (
    <div>
      <div className="header">{header}</div>
      <div className="layout-below-header">
        <div className="navigation">{navigation}</div>
        <div className="content">
          <div className="body">{body}</div>
          <div className="footer">{footer}</div>
        </div>
      </div>
    </div>
  );
}
