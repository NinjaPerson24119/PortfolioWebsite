import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Header } from '../header/Header';
import styles from './Overview.module.scss';

function Overview() {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Header></Header>
      <Typography variant="body1">{t('OVERVIEW.ABOUT_ME')}</Typography>
    </div>
  );
}

export { Overview };
