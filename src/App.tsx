import { useState, useMemo } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { BackgroundEllipse } from './background-ellipse/BackgroundEllipse';
import { Footer } from './footer/Footer';
import {
  Language,
  LanguageContext,
} from './language-switcher/language-context';
import { Layout } from './layout/Layout';
import { Navigation } from './navigation/Navigation';
import { GenerateRouter, LayoutProps } from './routing';
import { Theme } from './theme/Theme';

export function App() {
  const [language, setLanguage] = useState<Language>('english');
  const languageContext = useMemo(
    () => ({
      language: language,
      setLanguage: setLanguage,
    }),
    [language],
  );

  const layout = ({ content }: LayoutProps) => (
    <Layout navigation={<Navigation />} footer={<Footer />} content={content} />
  );
  const router = useMemo(() => GenerateRouter(layout), [layout]);

  return (
    <LanguageContext.Provider value={languageContext}>
      <HelmetProvider>
        <Theme>
          <RouterProvider router={router} />
          <BackgroundEllipse diameter="250px" top="-100px" left="-100px" />
          <BackgroundEllipse diameter="200px" bottom="-50px" right="-50px" />
        </Theme>
      </HelmetProvider>
    </LanguageContext.Provider>
  );
}
