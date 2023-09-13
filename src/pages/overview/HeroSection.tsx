import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Header } from '../../header/Header';

export function HeroSection() {
  const { t } = useTranslation();
  return (
    <>
      <Header></Header>
      <Typography variant="h2" color="secondary">
        {t('OVERVIEW.INTRODUCTION')}
      </Typography>
      <Typography variant="body1">{t('OVERVIEW.ABOUT_ME')}</Typography>
    </>
  );
}
