import { Avatar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import avatarImage from '../assets/images/avatar_jellyfish.jpeg';
import './Header.scss';

export function Header() {
  const { t } = useTranslation();
  const avatarSize = 128;

  return (
    <div className="header">
      <div className="banner">
        <Avatar
          alt={t('FULL_NAME')}
          src={avatarImage}
          sx={{ width: avatarSize, height: avatarSize }}
        />
        <h1>{t('FULL_NAME')}</h1>
        <h2>{t('HEADLINE')}</h2>
      </div>
    </div>
  );
}
