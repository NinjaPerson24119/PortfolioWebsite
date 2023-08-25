import React from 'react';
import { i18n } from './i18n';
import HomeIcon from '@mui/icons-material/Home';
import SailingIcon from '@mui/icons-material/Sailing';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const DEFAULT_PAGE_URL = 'overview';

export interface NavigationItem {
  text: string;
  icon: React.JSX.Element;
  href: string;
  component: React.JSX.Element;
}

export const NavigationItems: NavigationItem[] = [
  {
    text: i18n.t('NAVIGATION.OVERVIEW'),
    icon: <HomeIcon fontSize="large" color="primary" />,
    href: DEFAULT_PAGE_URL,
    component: <p>Overview</p>,
  },
  {
    text: i18n.t('NAVIGATION.PRE_UNIVERSITY_PROJECTS'),
    icon: <VideogameAssetIcon fontSize="large" color="primary" />,
    href: 'pre-university-projects',
    component: <p>Pre-University Projects</p>,
  },
  {
    text: i18n.t('NAVIGATION.ARVP'),
    icon: <SailingIcon fontSize="large" color="primary" />,
    href: 'arvp',
    component: <p>ARVP</p>,
  },
];

export function GenerateRouter(layout: React.JSX.Element) {
  return createBrowserRouter([
    {
      path: '*',
      element: <Navigate to={DEFAULT_PAGE_URL} />,
    },
    {
      path: '/',
      element: layout,
      errorElement: <p>404 Error</p>,
      children: NavigationItems.map((navigationItem) => {
        return {
          path: navigationItem.href,
          element: <p>{navigationItem.text}</p>,
        };
      }),
    },
  ]);
}
