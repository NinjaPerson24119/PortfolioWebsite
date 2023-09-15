import CircleIcon from '@mui/icons-material/Circle';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, useTheme, Box, useMediaQuery } from '@mui/material';
import React from 'react';
import { SOCIAL_URLS, EMAIL_SECTION_ID } from '../constants';
import { ColorModeToggle } from '../theme/ColorModeToggle';
import styles from './IconsBar.module.scss';

interface HeaderLink {
  icon: React.ReactNode;
  href?: string;
  newTab?: boolean;
}

interface IconsBarProps {
  toggleNavigation?: () => void;
}

export function IconsBar({ ...props }: IconsBarProps) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  const scrollToEmailSection = () => {
    const section = document.getElementById(EMAIL_SECTION_ID);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const headerLinks: HeaderLink[] = [
    {
      icon: (
        <EmailIcon
          fontSize="large"
          sx={{ color: theme.palette.text.link }}
          onClick={scrollToEmailSection}
        />
      ),
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

  const Divider = () => (
    <CircleIcon
      sx={{ color: theme.palette.text.link, fontSize: '8px' }}
    ></CircleIcon>
  );

  return (
    <Box className={styles.headerLinks}>
      <ColorModeToggle />
      <Divider />
      {headerLinks.map((headerLink, index) => (
        <>
          {headerLink.href !== null ? (
            <IconButton
              key={index}
              size="large"
              href={headerLink.href!}
              target={headerLink.newTab ? '_blank' : undefined}
            >
              {headerLink.icon}
            </IconButton>
          ) : (
            <>{headerLink.icon}</>
          )}
        </>
      ))}
      {!isMd && (
        <>
          <Divider />
          <IconButton size="large" onClick={props.toggleNavigation}>
            <MenuIcon
              fontSize="large"
              sx={{ color: theme.palette.text.link }}
            />
          </IconButton>
        </>
      )}
    </Box>
  );
}
