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
  newTab?: boolean;
}

export function IconsBar() {
  const theme = useTheme();
  const openMenu = () => {
    console.log('TODO: open menu');
  };

  const headerLinks: HeaderLink[] = [
    {
      icon: (
        <EmailIcon fontSize="large" sx={{ color: theme.palette.text.link }} />
      ),
      href: 'mailto:' + PUBLIC_EMAIL,
    },
    {
      icon: (
        <LinkedInIcon
          fontSize="large"
          sx={{ color: theme.palette.text.link }}
        />
      ),
      href: SOCIAL_URLS.LINKEDIN,
      newTab: true,
    },
    {
      icon: (
        <GitHubIcon fontSize="large" sx={{ color: theme.palette.text.link }} />
      ),
      href: SOCIAL_URLS.GITHUB,
      newTab: true,
    },
  ];

  return (
    <>
      <div className={styles.headerLinks}>
        <ColorModeToggle className={styles.colorModeToggle} />
        {headerLinks.map((headerLink, index) => (
          <IconButton
            key={index}
            size="large"
            href={headerLink.href}
            target={headerLink.newTab ? '_blank' : undefined}
          >
            {headerLink.icon}
          </IconButton>
        ))}
        {!MediaQueryIsDesktop(theme) && (
          <IconButton size="large" onClick={openMenu}>
            <MenuIcon
              fontSize="large"
              sx={{ color: theme.palette.text.link }}
            />
          </IconButton>
        )}
      </div>
    </>
  );
}
