import { useTheme } from '@mui/material';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';
import { Header } from './header/Header';
import { Layout } from './layout/Layout';
import { Navigation } from './navigation/Navigation';
import { GenerateRouter, LayoutProps } from './routing';
import { MediaQueryIsDesktop, Theme } from './theme/Theme';

export function App() {
  const { t } = useTranslation();
  const theme = useTheme();

  // routing
  const layout = ({ content }: LayoutProps) => (
    <Layout
      header={<Header />}
      navigation={<Navigation collapsible={!MediaQueryIsDesktop(theme)} />}
      footer={<p>{t('COPYRIGHT')}</p>}
      content={content}
    />
  );
  const router = useMemo(() => GenerateRouter(layout), [layout]);

  return (
    <>
      <Theme>
        <RouterProvider router={router} />
      </Theme>
    </>
  );
}
