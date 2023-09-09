import { Typography, Box, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';

export function Footer() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box className={styles.footer} sx={{ bgcolor: theme.palette.primary.main }}>
      <Typography variant="body2">{t('COPYRIGHT')}</Typography>
      <Typography variant="body2">{t('BUILT_WITH')}</Typography>
    </Box>
  );
}
