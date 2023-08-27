import ErrorIcon from '@mui/icons-material/Error';
import HomeIcon from '@mui/icons-material/Home';
import SailingIcon from '@mui/icons-material/Sailing';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { CenteredBanner } from './centered-banner/CenteredBanner';
import { i18n } from './i18n';
import { ARVP } from './pages/ARVP';
import { Overview } from './pages/Overview';
import { PreUniversityProjects } from './pages/PreUniversityProjects';

const DEFAULT_PAGE_URL = 'overview';

export interface NavigationItem {
  text: string;
  icon: React.ReactNode;
  href: string;
  component: React.ReactElement;
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

export interface LayoutProps {
  content: React.ReactNode;
}

export function GenerateRouter(
  Layout: React.ComponentType<React.PropsWithChildren<LayoutProps>>,
) {
  const NotFoundPage = () => {
    return (
      <Layout
        content={
          <CenteredBanner
            hero={<SentimentVeryDissatisfiedIcon />}
            header={i18n.t('NOT_FOUND_PAGE.HEADER')}
          />
        }
      ></Layout>
    );
  };
  const ErrorPage = () => {
    return (
      <Layout
        content={
          <CenteredBanner
            hero={<ErrorIcon />}
            header={i18n.t('ERROR_PAGE.HEADER')}
            subheader={i18n.t('ERROR_PAGE.SUBHEADER')}
          />
        }
      ></Layout>
    );
  };

  return createBrowserRouter([
    {
      path: '/',
      element: <Layout content={<Outlet />} />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Navigate to={DEFAULT_PAGE_URL} />,
        },
        ...NavigationItems.map((navigationItem) => {
          return {
            path: navigationItem.href,
            element: navigationItem.component,
          };
        }),
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
      errorElement: <ErrorPage />,
    },
  ]);
}
