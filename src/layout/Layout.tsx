import './Layout.scss';
import { ReactNode } from 'react';

interface LayoutProps {
  header: ReactNode;
  navigation: ReactNode;
  footer: ReactNode;
  content: ReactNode;
}

export function Layout({ header, navigation, footer, content }: LayoutProps) {
  return (
    <div className="layout">
      <div className='sidebar'>
        <div className="header">{header}</div>
        <div className="navigation">{navigation}</div>
      </div>
      <div className="content-container">
        <div className="content">{content}</div>
        <div className="footer">{footer}</div>
      </div>
    </div>
  );
}
