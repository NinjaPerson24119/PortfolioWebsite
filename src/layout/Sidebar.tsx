import { ReactNode } from 'react';
import './Sidebar.scss';

interface SidebarProps {
  header: ReactNode;
  navigation: ReactNode;
}

export function Sidebar({ ...props }: SidebarProps) {
  return (
    <div className="sidebar">
      {props.header}
      {props.navigation}
    </div>
  );
}
