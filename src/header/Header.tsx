import { Avatar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import avatarImage from '../assets/images/avatar-jellyfish.jpeg';
import styles from './Header.module.scss';

export function Header() {
  const { t } = useTranslation();
  const avatarSize = 128;

  return (
    <div className={styles.header}>
      <Avatar
        alt={t('FULL_NAME')}
        src={avatarImage}
        sx={{ width: avatarSize, height: avatarSize }}
      />
      <div className={styles.headerTextContainer}>
        <Typography variant="h1">{t('FULL_NAME')}</Typography>
        <Typography variant="h2">{t('HEADLINE')}</Typography>
      </div>
    </div>
  );
}
