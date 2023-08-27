import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';
import { Avatar } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import avatarImage from '../assets/images/avatar.jpeg';
import { SOCIAL_URLS } from '../constants';
import { ColorModeToggle } from '../theme/ColorModeToggle';
import './Header.scss';

interface HeaderLink {
  icon: React.ReactNode;
  href: string;
}

export function Header() {
  const { t } = useTranslation();
  const headerLinks: HeaderLink[] = [
    {
      icon: <GitHubIcon fontSize="large" color="primary" />,
      href: SOCIAL_URLS.GITHUB,
    },
    {
      icon: <LinkedInIcon fontSize="large" color="primary" />,
      href: SOCIAL_URLS.LINKEDIN,
    },
  ];

  return (
    <div className="header">
      <div className="banner">
        <Avatar
          alt={t('FULL_NAME')}
          src={avatarImage}
          sx={{ width: 128, height: 128 }}
        />
        <h1>{t('FULL_NAME')}</h1>
        <h2>{t('HEADLINE')}</h2>
      </div>
      <div className="header-links">
        {headerLinks.map((headerLink, index) => (
          <IconButton key={index} size="large" href={headerLink.href}>
            {headerLink.icon}
          </IconButton>
        ))}
      </div>
      <ColorModeToggle />
    </div>
  );
}
