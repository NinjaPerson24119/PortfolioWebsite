import { ReactNode } from 'react';
import './Layout.scss';

interface LayoutProps {
  header: ReactNode;
  navigation: ReactNode;
  footer: ReactNode;
  content: ReactNode;
}

export function Layout({ ...props }: LayoutProps) {
  return (
    <div className="layout">
      <div className="sidebar">
        <div className="header">{props.header}</div>
        <div className="navigation">{props.navigation}</div>
      </div>
      <div className="content-container">
        <div className="content">{props.content}</div>
        <div className="footer">{props.footer}</div>
      </div>
    </div>
  );
}
