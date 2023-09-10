import GitHub from '@mui/icons-material/GitHub';
import { Typography, Box, useTheme, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SOURCE_CODE_URL } from '../constants';
import styles from './Footer.module.scss';

export function Footer() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box className={styles.footer} sx={{ bgcolor: theme.palette.primary.main }}>
      <Typography variant="body2">{t('COPYRIGHT')}</Typography>
      <Link
        href={SOURCE_CODE_URL}
        sx={{
          color: theme.palette.text.link,
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}
        target="_blank"
      >
        <Typography variant="body2">{t('BUILT_WITH')}</Typography>
        <GitHub fontSize="small" sx={{ color: theme.palette.text.link }} />
      </Link>
    </Box>
  );
}
