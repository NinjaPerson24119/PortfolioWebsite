import HomeIcon from '@mui/icons-material/Home';
import SailingIcon from '@mui/icons-material/Sailing';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { i18n } from './i18n';
import { ARVP } from './pages/ARVP';
import { Overview } from './pages/Overview';
import { PreUniversityProjects } from './pages/PreUniversityProjects';

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
    component: <Overview />,
  },
  {
    text: i18n.t('NAVIGATION.PRE_UNIVERSITY_PROJECTS'),
    icon: <VideogameAssetIcon fontSize="large" color="primary" />,
    href: 'pre-university-projects',
    component: <PreUniversityProjects />,
  },
  {
    text: i18n.t('NAVIGATION.ARVP'),
    icon: <SailingIcon fontSize="large" color="primary" />,
    href: 'arvp',
    component: <ARVP />,
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
