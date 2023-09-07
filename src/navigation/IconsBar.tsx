import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, useTheme } from '@mui/material';
import React from 'react';
import { SOCIAL_URLS, PUBLIC_EMAIL } from '../constants';
import { ColorModeToggle } from '../theme/ColorModeToggle';
import { MediaQueryIsDesktop } from '../theme/Theme';
import styles from './IconsBar.module.scss';

interface HeaderLink {
  icon: React.ReactNode;
  href: string;
}

const headerLinks: HeaderLink[] = [
  {
    icon: <EmailIcon fontSize="large" color="primary" />,
    href: 'mailto:' + PUBLIC_EMAIL,
  },
  {
    icon: <LinkedInIcon fontSize="large" color="primary" />,
    href: SOCIAL_URLS.LINKEDIN,
  },
  {
    icon: <GitHubIcon fontSize="large" color="primary" />,
    href: SOCIAL_URLS.GITHUB,
  },
];

export function IconsBar() {
  const theme = useTheme();
  const openMenu = () => {
    console.log('TODO: open menu');
  };

  return (
    <>
      <div className={styles.headerLinks}>
        {headerLinks.map((headerLink, index) => (
          <IconButton key={index} size="large" href={headerLink.href}>
            {headerLink.icon}
          </IconButton>
        ))}
        {!MediaQueryIsDesktop(theme) && (
          <IconButton size="large" onClick={openMenu}>
            <MenuIcon fontSize="large" color="primary" />
          </IconButton>
        )}
      </div>
      <ColorModeToggle className={styles.colorModeToggle} />
    </>
  );
}
