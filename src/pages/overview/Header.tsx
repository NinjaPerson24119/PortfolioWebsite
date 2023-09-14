import { Avatar, Typography, useTheme, alpha } from '@mui/material';
import { useTranslation } from 'react-i18next';
import avatarImage from '../../assets/images/avatar-jellyfish.jpeg';
import { MediaQueryIsDesktop } from '../../theme/Theme';
import styles from './Header.module.scss';

export function Header() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isDesktop = MediaQueryIsDesktop(theme);
  const avatarSize = isDesktop ? 164 : 196;
  const shadowColor = alpha(theme.palette.secondary.main, 0.3);

  return (
    <div className={styles.header}>
      <Avatar
        alt={t('FULL_NAME')}
        src={avatarImage}
        className={styles.avatar}
        sx={{
          width: avatarSize,
          height: avatarSize,
          filter: `
          drop-shadow(1px 2px 3px ${shadowColor})
          drop-shadow(2px 4px 6px ${shadowColor})
          drop-shadow(4px 8px 12px ${shadowColor})`,
        }}
      />
      <div className={styles.headerTextContainer}>
        <Typography variant="h1">{t('FULL_NAME')}</Typography>
        <Typography variant="h2">{t('HEADLINE')}</Typography>
      </div>
    </div>
  );
}
