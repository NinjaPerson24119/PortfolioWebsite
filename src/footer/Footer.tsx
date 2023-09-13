import GitHub from '@mui/icons-material/GitHub';
import { Typography, Box, useTheme, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import canadianMapleLeaf from '../assets/images/canadian-maple-leaf.svg';
import { SOURCE_CODE_URL } from '../constants';
import styles from './Footer.module.scss';

export function Footer() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box className={styles.footer}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <img src={canadianMapleLeaf} alt="Canadian maple leaf"></img>
        <Typography variant="body2">{t('NATIONALITY')}</Typography>
      </Box>
      <Box sx={{ bgcolor: theme.palette.primary.main }}>
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
      <LanguageSwitcher />
    </Box>
  );
}
