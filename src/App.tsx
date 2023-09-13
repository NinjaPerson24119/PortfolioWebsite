import { useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import { BackgroundEllipse } from './background-ellipse/BackgroundEllipse';
import { Footer } from './footer/Footer';
import { Layout } from './layout/Layout';
import { Navigation } from './navigation/Navigation';
import { GenerateRouter, LayoutProps } from './routing';
import { Theme } from './theme/Theme';

export function App() {
  const layout = ({ content }: LayoutProps) => (
    <Layout navigation={<Navigation />} footer={<Footer />} content={content} />
  );
  const router = useMemo(() => GenerateRouter(layout), [layout]);
  return (
    <>
      <Theme>
        <RouterProvider router={router} />
        <BackgroundEllipse diameter="250px" top="-100px" left="-100px" />
        <BackgroundEllipse diameter="200px" bottom="-50px" right="-50px" />
      </Theme>
    </>
  );
}
