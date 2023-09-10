import { Typography, Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import yolactAnimation from '../assets/images/arvp/yolact.webp';
import { Header } from '../header/Header';
import { ROUTES } from '../routing';
import styles from './Overview.module.scss';

function Overview() {
  const { t } = useTranslation();
  return (
    <Box className={styles.container}>
      <Header></Header>
      <Typography variant="body1">{t('OVERVIEW.ABOUT_ME')}</Typography>
      <img src={yolactAnimation} />
      <Typography variant="h2" color="secondary" sx={{ textAlign: 'center' }}>
        {t('OVERVIEW.ARVP.HEADER')}
      </Typography>
      <Button variant="contained" color="secondary" href={ROUTES.ARVP}>
        {t('OVERVIEW.ARVP.LEARN_MORE')}
      </Button>
    </Box>
  );
}

export { Overview };
