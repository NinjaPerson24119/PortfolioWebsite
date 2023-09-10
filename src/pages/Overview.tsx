import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import yolactAnimation from '../assets/images/arvp/yolact.webp';
import { Header } from '../header/Header';
import styles from './Overview.module.scss';

function Overview() {
  const { t } = useTranslation();
  return (
    <Box className={styles.container}>
      <Header></Header>
      <Typography variant="body1">{t('OVERVIEW.ABOUT_ME')}</Typography>
      <img src={yolactAnimation} />
    </Box>
  );
}

export { Overview };
