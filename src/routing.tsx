import ErrorIcon from '@mui/icons-material/Error';
import HomeIcon from '@mui/icons-material/Home';
import SailingIcon from '@mui/icons-material/Sailing';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import React, { useEffect, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Outlet,
  createBrowserRouter,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { CONTACT_FORM_ID } from './constants';
import {
  ErrorPageTemplate,
  IconProps,
} from './error-page-template/ErrorPageTemplate';
import { i18n } from './i18n';
import { MDXComponentMapping } from './markdown';
import { BlogPage } from './pages/blog/BlogPage';

const OverviewPage = lazy(() => import('./pages/overview/OverviewPage'));
const ARVPBlog = lazy(() => import('./assets/content/blog/arvp.mdx'));
const FishingGameBlog = lazy(
  () => import('./assets/content/blog/fishing_game.mdx'),
);

export const ROUTES = {
  OVERVIEW: '/overview',
  ARVP: '/blog/arvp',
  FISHING_GAME: '/blog/fishing_game',
  CONTACT: `/overview#${CONTACT_FORM_ID}`,
};
const DEFAULT_PAGE_URL = ROUTES.OVERVIEW;

export function ScrollToElementOnHashRouteEffect() {
  // adapted from: https://stackoverflow.com/a/61311926
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change
  return <></>;
}

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
    component: <OverviewPage />,
  },
  {
    text: i18n.t('NAVIGATION.ARVP'),
    icon: <SailingIcon fontSize="large" />,
    href: ROUTES.ARVP,
    component: (
      <BlogPage>
        <ARVPBlog components={MDXComponentMapping()} />
      </BlogPage>
    ),
  },
  {
    text: i18n.t('NAVIGATION.FISHING_GAME'),
    icon: <VideogameAssetIcon fontSize="large" />,
    href: ROUTES.FISHING_GAME,
    component: (
      <BlogPage>
        <FishingGameBlog components={MDXComponentMapping()} />
      </BlogPage>
    ),
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
