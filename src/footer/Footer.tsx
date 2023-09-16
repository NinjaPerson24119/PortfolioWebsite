import GitHub from '@mui/icons-material/GitHub';
import { Typography, Box, useTheme, Link, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import canadianMapleLeaf from '../assets/images/canadian-maple-leaf.svg';
import { SOURCE_CODE_URL } from '../constants';
import { LanguageSwitcher } from '../language-switcher/LanguageSwitcher';
import styles from './Footer.module.scss';

export function Footer() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box className={styles.footer} sx={{ bgcolor: theme.palette.primary.main }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px',
          order: isMd ? undefined : 1,
        }}
      >
        <img
          className={styles.mapleLeaf}
          src={canadianMapleLeaf}
          alt="Canadian maple leaf"
        ></img>
        <Typography variant="body2" sx={{ color: theme.palette.tertiary.main }}>
          {t('NATIONALITY')}
        </Typography>
      </Box>
      <Box sx={{ order: isMd ? undefined : 3 }}>
        <Typography variant="body2" sx={{ color: theme.palette.tertiary.main }}>
          {t('COPYRIGHT')}
        </Typography>
        <Link
          href={SOURCE_CODE_URL}
          sx={{
            color: theme.palette.tertiary.main,
            display: 'flex',
            gap: '4px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          target="_blank"
        >
          <Typography sx={{ textDecoration: 'underline' }} variant="body2">
            {t('BUILT_WITH')}
          </Typography>
          <GitHub
            fontSize="small"
            sx={{ color: theme.palette.tertiary.main }}
          />
        </Link>
      </Box>
      <Box sx={{ order: isMd ? undefined : 2 }}>
        <LanguageSwitcher />
      </Box>
    </Box>
  );
}
