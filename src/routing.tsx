import ErrorIcon from '@mui/icons-material/Error';
import HomeIcon from '@mui/icons-material/Home';
import SailingIcon from '@mui/icons-material/Sailing';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Outlet, createBrowserRouter, Navigate } from 'react-router-dom';
import {
  ErrorPageTemplate,
  IconProps,
} from './error-page-template/ErrorPageTemplate';
import { i18n } from './i18n';
import { ARVP } from './pages/arvp/ARVP';
import { Overview } from './pages/overview/Overview';

export const ROUTES = {
  OVERVIEW: 'overview',
  ARVP: 'arvp',
};
const DEFAULT_PAGE_URL = ROUTES.OVERVIEW;

const DEFAULT_PAGE_TITLE = i18n.t('TAB_TITLE');
function WithHelmet({
  ...props
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <>
      <Helmet>
        <title>{props.title ?? DEFAULT_PAGE_TITLE}</title>
      </Helmet>
      {props.children}
    </>
  );
}

export interface NavigationItem {
  text: string;
  icon: React.ReactNode;
  href: string;
  component: React.ReactElement;
}

export const NavigationItems: NavigationItem[] = [
  {
    text: i18n.t('NAVIGATION.OVERVIEW'),
    icon: <HomeIcon fontSize="large" />,
    href: ROUTES.OVERVIEW,
    component: <Overview />,
  },
  {
    text: i18n.t('NAVIGATION.ARVP'),
    icon: <SailingIcon fontSize="large" />,
    href: ROUTES.ARVP,
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
          <ErrorPageTemplate
            icon={(props: IconProps) => (
              <SentimentVeryDissatisfiedIcon className={props.className} />
            )}
            header={i18n.t('NOT_FOUND_PAGE.HEADER')}
            redirectInfo={{
              route: ROUTES.OVERVIEW,
              text: i18n.t('NOT_FOUND_PAGE.REDIRECT_TEXT'),
            }}
          />
        }
      ></Layout>
    );
  };
  const ErrorPage = () => {
    return (
      <Layout
        content={
          <ErrorPageTemplate
            icon={(props: IconProps) => (
              <ErrorIcon className={props.className} />
            )}
            header={i18n.t('ERROR_PAGE.HEADER')}
            subheader={i18n.t('ERROR_PAGE.SUBHEADER')}
            redirectInfo={{
              route: ROUTES.OVERVIEW,
              text: i18n.t('ERROR_PAGE.REDIRECT_TEXT'),
            }}
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
            element: (
              <WithHelmet title={navigationItem.text}>
                {navigationItem.component}
              </WithHelmet>
            ),
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
