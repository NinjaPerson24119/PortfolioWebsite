import './Header.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';
import { ColorModeToggle } from '../theme/ColorModeToggle';

interface HeaderLink {
  icon: JSX.Element;
  href: string;
}

export function Header() {
  const headerLinks: HeaderLink[] = [
    {
      icon: <GitHubIcon fontSize="large" color="primary" />,
      href: 'https://github.com/NinjaPerson24119',
    },
    {
      icon: <LinkedInIcon fontSize="large" color="primary" />,
      href: 'https://www.linkedin.com/in/nwengel',
    },
  ];

  return (
    <div className="header">
      <div className="banner">
        <h1>Nicholas Wengel</h1>
        <h2>Software Developer</h2>
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
