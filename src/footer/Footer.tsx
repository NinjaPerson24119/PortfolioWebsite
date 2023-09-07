import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';

export function Footer() {
  const { t } = useTranslation();
  return (
    <div className={styles.footer}>
      <Typography variant="body2">{t('COPYRIGHT')}</Typography>
      <Typography variant="body2">{t('BUILT_WITH')}</Typography>
    </div>
  );
}
