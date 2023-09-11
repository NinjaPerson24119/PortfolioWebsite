import { Box, Typography, Link, useTheme } from '@mui/material';
import React from 'react';
import ARVPContent from '../../assets/content/arvp.mdx';
import styles from './ARVP.module.scss';

function TypographyVariant(
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1',
) {
  return function TypographyVariant({
    ...props
  }: React.PropsWithChildren<unknown>) {
    return <Typography variant={variant}>{props.children}</Typography>;
  };
}

interface StyledLinkProps {
  href: string;
  children: React.ReactNode;
}

function StyledLink({ ...props }: StyledLinkProps) {
  const theme = useTheme();
  return (
    <Link
      sx={{ textDecoration: 'none', color: theme.palette.text.link }}
      href={props.href}
      target={props.href.includes('#') ? '' : '_blank'}
    >
      {props.children}
    </Link>
  );
}

export function ARVP() {
  React.createElement(ARVPContent);
  return (
    <Box className={styles.container}>
      <ARVPContent
        components={{
          h1: TypographyVariant('h1'),
          h2: TypographyVariant('h2'),
          h3: TypographyVariant('h3'),
          h4: TypographyVariant('h4'),
          h5: TypographyVariant('h5'),
          h6: TypographyVariant('h6'),
          p: TypographyVariant('body1'),
          a: StyledLink,
        }}
      />
    </Box>
  );
}
